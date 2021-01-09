from flask import Blueprint, jsonify, request
from . import db
from .models import Todo, Bucket

main = Blueprint("main", __name__)

@main.route("/add_todo", methods=["POST"])
def add_todo():
    todo_data = request.get_json()

    new_todo = Todo(title=todo_data["title"], status=todo_data["status"], bucket=todo_data["bucket"])
    db.session.add(new_todo)
    db.session.commit()
    return "Done", 201

@main.route("/todos")
def todos():
    todo_list = Todo.query.all()
    todos = []
    for item in todo_list:
        todos.append({"id":item.id, "title": item.title, "status":item.status, "bucket": item.bucket})
    return jsonify({"todos": todos})

@main.route("/delete_todo/<title>")
def delete_todo(title):
    todo = Todo.query.filter_by(title=title).one()
    db.session.delete(todo)
    db.session.commit()
    return "Done", 200

@main.route("/update_status/<title>/<status>")
def update_status(title, status):
    todo = Todo.query.filter_by(title=title).one()
    todo.status = status
    db.session.commit()
    return "Done", 200

@main.route("/add_bucket", methods=["POST"])
def add_bucket():
    bucket_data = request.get_json()

    new_bucket = Bucket(title=bucket_data["title"])
    db.session.add(new_bucket)
    db.session.commit()
    return "Done", 201

@main.route("/buckets")
def buckets():
    bucket_list = Bucket.query.all()
    buckets = []
    for item in bucket_list:
        buckets.append({"id":item.id, "title": item.title})
    return jsonify({"buckets": buckets})

