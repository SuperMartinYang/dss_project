from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
import json
app = Flask(__name__)
CORS(app, resources= r'/*')

@app.route('/')
def hello():
    return "<h1>Hi!</h1>"

@app.route('/about')
def about():
    return "about page"

@app.route('/addRecord', methods=['GET', 'POST'])
def addRecord():
    content = request.json
    address = content['patientAddr']
    del content['patientAddr']
    newCase = content
    # newCase['date'] = request.form['date']
    # newCase['doctorID'] = request.form['doctorID']
    # newCase['hospital'] = request.form['hospital']
    # newCase['suggestion'] = request.form['suggestion']
    # newCase['symptom'] = request.form['symptom']
    # newCase['treatment'] = request.form['treatment']
    filename = "./" + address + ".json"
    path = Path(filename)
    if path.is_file():
        fb = open(filename, 'r')
        old = json.load(fb)
        fb.close()
        old.append(newCase)
        fb = open(filename, 'w')
        print(old)
        json.dump(old, fb)
        fb.close()
    else:
        fb = open(filename, 'w')
        json.dump([newCase], fb)
        fb.close()




@app.route('/getHistory', methods=['GET'])
def getHistory():
    if request.method == 'GET':
        address = request.args.get('address')
        filename = "./" + address + ".json"
        path = Path(filename)
        if path.is_file():
            f = open(filename, 'r')
            data = json.load(f)
            f.close()
            return jsonify(result=data)    #Array
        else:
            return False
    else:
        return '<h1>Only accept the Post request！</h1>'





if __name__ == '__main__':
    app.run(debug=True)