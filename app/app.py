import json

from requests import session
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    book_sales_data = {
        "January": 30,
        "February": 20,
        "March": 10,
        "April": 50,
        "May": 45,
        "June": 55,
        "July": 25,
        "August": 60,
        "September": 80
    }
    if request.method == "POST":
        print("post data received")
        data = jsonify(book_sales_data)
        print(type(data))
        return data
    elif request.method == "GET":
        return render_template("linegraph.html")    



