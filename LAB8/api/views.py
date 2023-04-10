from django.shortcuts import render, get_object_or_404

from api.models import Product, Category


def all_products(request):
    products = Product.objects.all()
    content = {
        'products': products
    }
    return render(request, 'api/index.html', content)


def product_detail(request, id):
    product = Product.objects.filter(id=id).get()
    content = {
        'product': product
    }
    return render(request, 'api/product_detail.html', content)


def all_categories(request):
    categories = Category.objects.all()
    content = {
        'categories': categories
    }
    return render(request, 'api/categories.html', content)


def one_category(request, id):
    category = Category.objects.filter(id=id).get()
    products = Product.objects.filter(category=category)
    content = {
        'category': category,
        'products': products,

    }
    return render(request, 'api/one_category.html', content)


def products_of_one_category(request, id):
    category = Category.objects.filter(id=id).get()
    products = Product.objects.filter(category=category).all()
    content = {
        'category': category,
        'products': products,
    }
    return render(request, 'api/one_category.html', content)
