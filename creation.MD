# Dependencies

nodejs
vite
react

python3.11
django djangorestframework django-cors-headers
venv

# Set up

$ mkdir api && cd api
$ django-admin startproject django_crud_api .
$ python manage.py startapp tasks
$ python manage.py migrate
$ python manage.py createsuperuser


''' on settings.py '''
INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    'tasks'
    ...
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware', # corsheaders
    'django.middleware.common.CommonMiddleware',
    
]

CORS_ORIGIN_ALLOW_ALL = True


