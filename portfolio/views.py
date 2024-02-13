from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse


def home_page(request):
    return render(request, "home.html", {})


def education_page(request):
    return render(request, "education.html", {})


def about_page(request):
    return render(request, "about.html", {})


def algos_page(request):
    return render(request, "algoconsole.html", {})


def artwork_page(request):
    return render(request, "artwork.html", {})


def brackets_page(request):
    return render(request, "brackets.html", {})


def contact_page(request):
    return render(request, "contact.html", {})


def d3clarity(request):
    return render(request, "d3pages/d3clarity.html", {})


def d3color(request):
    return render(request, "d3pages/d3color.html", {})


def d3hatecrimes(request):
    return render(request, "d3pages/d3hatecrimes.html", {})


def d3aiddata(request):
    return render(request, "d3pages/d3aiddata.html", {})


def goals_page(request):
    return render(request, "goals.html", {})


def mechanical_projects_page(request):
    return render(request, "mechanical.html", {})


def palloc_page(request):
    return render(request, "payalloc.html", {})


def projects_page(request):
    return render(request, "projects.html", {})


def work_experience_page(request):
    return render(request, "workexperience.html", {})

def contact_form(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            subject = 'New feedback from Personal Website'
            message = f'Name: {form.cleaned_data["name"]}\nEmail: {form.cleaned_data["email"]}\n\nNote:\n{form.cleaned_data["note"]}'
            from_email = settings.EMAIL_HOST_USER
            recipient_list = [settings.CONTACT_EMAIL]
            print('contacted user is this -------->', settings.CONTACT_EMAIL)
            # sending
            send_mail(subject, message, from_email, recipient_list)
            return redirect('thank_you')
    else:
        form = ContactForm()
    return render(request, 'contact_form.html', {'form': form})


def thank_you_page(request):
    redirect_to='/'
    return render(request, 'thank_you.html', {'redirect_url':redirect_to})