from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Company, Vacancy


def all_companies(request):
    companies = Company.objects.all().get()
    content = {
        'companies': companies,
    }
    return render(request, "", content)


def company_detail(request, id):
    try:
        company = get_object_or_404(Company, pk=id)
        content = {
            'company': company,
        }
        return render(request, "", content)
    except:
        raise Http404('Company Not Found!')


def one_company_vacancies(request, id):
    try:
        company = get_object_or_404(Company, pk=id)
        vacancies = Vacancy.objects.filter(company=company.name)
        content = {
            'company':company,
            'vacancies':vacancies,
        }
        return render(request, "", content)
    except:
        pass


def all_vacancies(request):
    content = {
        'vacancies': Vacancy.objects.all().get()
    }
    return render(request, '', content)


def one_vacancy(request,id):
    try:
        vacancy = get_object_or_404(Vacancy, id=id)
        content = {
            'vacancy':vacancy,
        }
        return render(request, '', content)
    except:
        pass


def list_of_top_vacancies(request):
    content = {
        'vacancies': Vacancy.objects.all().order_by('-salary')
    }