# Document management system 

### for dev purposes:
1. Install python3+pip3 if needed
2. Install pipenv environment
```
pip install pipenv
```
3. Activate a pipenv environment through creating a new shell
```
pipenv shell
```
4. Install Python Packages (django-heroku is required in case of deploying to heroku using postgres add-on, skip if not needed) 
```
pipenv install django djangorestframework django-rest-knox django-heroku
```
5. Install NPM packages
```
npm i
```
6. Run django server
```
cd boilerplate
```
```
python manage.py runserver
```

7. Run frontend module bundler
```
cd ./
```
```
npm run dev
```
8. go to localhost:8000 
