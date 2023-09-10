"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)
def FightMove(creator_move, receiver_move):
    if creator_move == receiver_move:
        return "tie"
    elif creator_move == "Rock":
        if receiver_move == "Paper":
            return "receiver"
        else:  # receiver_move == "Scissors"
            return "creator"
    elif creator_move == "Paper":
        if receiver_move == "Scissors":
            return "receiver"
        else:  # receiver_move == "Rock"
            return "creator"
    elif creator_move == "Scissors":
        if receiver_move == "Rock":
            return "receiver"
        else:  # receiver_move == "Paper"
            return "creator"
    else:
        return "Invalid input"

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():

    response_body = request.get_json(force=True)
    email=request_body.get('email')
    

    return jsonify(response_body), 200