from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('about/', views.about_page, name='about'),
    path('brackets/', views.brackets_page, name='brackets'),
    path('contact/', views.contact_page, name='contact'),
    path('d3clarity/', views.d3clarity, name='d3clarity'),
    path('d3color/', views.d3color, name='d3color'),
    path('d3aiddata/', views.d3aiddata, name='d3aiddata'),
    path('d3hatecrimes/', views.d3hatecrimes, name='d3hatecrimes'),
    path('education/', views.education_page, name='education'),
    path('palloc/', views.palloc_page, name='palloc'),
    path('projects/', views.projects_page, name='projects'),
    path('sortingalgos/', views.algos_page, name='algos'),
    path('contactform/', views.contact_form, name='contact_form'),
    path('thankyou/', views.thank_you_page, name='thank_you'),
    path('battleship/', views.battleship_page, name='battleship'),
    path('nycaccess/', views.nycaccess_page, name='nycaccess'),
    path('lithophanes/', views.lithophanes_page, name='lithophanes'),
    path('nyual/', views.nyual_page, name='nyual'),
    path('ml5/', views.ml5_page, name='ml5'),
]