from . import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    status = db.Column(db.String(10))
    bucket = db.Column(db.String(20))

class Bucket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20))
