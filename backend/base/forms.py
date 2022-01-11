from django import forms


class VideoForm(forms.Form):
    firstname = forms.CharField(label="Enter first name", max_length=50)
    email = forms.EmailField(label="Enter Email")
    file = forms.FileField()  # for creating file input

