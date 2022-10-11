import json
import csv
from requests import session
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

filename = 'Quote-Equity-NIITLTD-EQ-10-09-2022-to-10-10-2022.csv'

@app.route("/", methods=["GET", "POST"])
def stock_data():
    if request.method == "POST":
        data = dict()
        with open(filename, mode='r', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                data[row['Date ']] = float(row['ltp '].replace(",", ""))
            return data
    elif request.method == "GET":
        return render_template("linegraph.html")    



