from flask import Flask, request, jsonify
from pathlib import Path
import json
app = Flask(__name__)


@app.route('/')
def hello():
    return "<h1>Hi!</h1>"

@app.route('/about')
def about():
    return "about page"

@app.route('/addRecord', methods=['GET'])
def addRecord():
    address = request.form['address']
    newCase = request.form['newCase']
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
        json.dump([new], fb)
        fb.close()




@app.route('/getHistory', methods=['GET','POST'])
def getHistory():
    if request.method == 'POST':
        address = request.form['address']
        print("address:",address)
        filename = "./" + address + ".json"
        print(filename)
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