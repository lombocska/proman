from flask import *
from json import *
from model import *

app = Flask(__name__)


# server
@app.route("/")
def index():
    return render_template('index.html')


@app.route('/api/', methods=['GET'])
def get_data_from_database():
    try:
        model_list = Board.get_serialized_items()
        # print(model_list)
        return json.dumps(model_list)
    except:
        print("Error")


@app.route('/api/', methods=['POST'])
def post_data_to_database():
    print(request.form['board'])
    return "sdkgjhadkjgh"


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
