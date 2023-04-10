from django.urls import path, include

from api.views import all_products, product_detail, all_categories, one_category, products_of_one_category

urlpatterns = [
    path('products/', all_products, name = 'all_products' ),
    path('products/<int:id>', product_detail, name = 'product_detail'),
    path('categories/', all_categories, name='all_categories'),
    path('categories/<int:id>/', one_category, name='one_category' ),
    path('categories/<int:id>/products', products_of_one_category, name='product_of_one_category')
]