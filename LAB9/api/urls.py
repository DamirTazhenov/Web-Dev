from django.urls import path, include

from api.views import all_companies, one_company_vacancies, all_vacancies, one_vacancy, company_detail, list_of_top_vacancies

urlpatterns = [
    path('companies/', all_companies, name='all_companies'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/companies', one_company_vacancies, name='one_company_vacancies'),
    path('vacancies/', all_vacancies, name='all_vacancies'),
    path('vacancies/<int:id>/', one_vacancy, name='one_vacancy'),
    path('vacancies/top_ten/', list_of_top_vacancies, name='list_of_top_vacanies')
]
