## TODO App

TODO App created using React and Python. Using this app you can create a bucket and add your todo's inside a bucket.

### Functionality

- Create a Bucket
- Add a Todo to a bucket
- Complete a Todo or mark a completed Todo as active.
- Delete a Todo

### Tech Stack

**Frontend**: React, Semantic UI  
**Backend**: Python, Flask and Flask SQLAlchemy  
**Database**: SQLite

![Todo App](/assets/app.PNG)

### Steps to run the app locally

- Clone this repository
- Install the latest version of Python
- Open Terminal or Command Prompt, install pipenv  
  ` pip install pipenv`
- Navigate to the location of the app in Command Prompt and run the following commands.  
  `pipenv install flask flask-sqlalchemy`  
  `pipenv shell`  
  `set FLASK_APP = api`  
  `set FLASK_DEBUG = 1`  
  `pipenv shell`
- Open a new command prompt window, and navigate to client folder. Run the following commands.  
  `npm install`  
  `npm start`
