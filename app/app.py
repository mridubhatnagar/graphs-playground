import json
import csv
from requests import session
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

filenames = [
    'NIITLTD.csv',
    'INFY.csv',
    'HCLTECH.csv'
]

@app.route("/", methods=["GET", "POST"])
def stock_data():
    if request.method == "POST":
        scrip_names = json.loads(request.data)['scripname']
        data = dict()
        for scripname in scrip_names:
            scrip_file = scripname.strip().upper() + ".csv"
            print(scrip_file)
            if scrip_file in filenames:
                with open(scrip_file, mode='r', encoding='utf-8-sig') as csvfile:
                    reader = csv.DictReader(csvfile)
                    D = {}
                    for row in reader:  
                        D.update({row['Date ']: float(row['ltp '].replace(",", ""))})
                    if D != {}:
                        data[scripname.strip()] = D
                    else:
                        data = {}
        data = jsonify(data)
        print(data)
        return data
    elif request.method == "GET":
        return render_template("linegraph.html")    



