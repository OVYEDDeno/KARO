"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Game
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

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

@api.route('/signup', methods=['POST'])
def signup():

    response_body = request.get_json(force=True)
    email=request_body.get('email')
    

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/create-game', methods=['POST'])
@jwt_required()
def create_game():

    body = request.get_json(force=True)
    current_user = User.query.filter_by(email=get_jwt_identity())
    wager = body['wager']

    if current_user is None:
        return 'User not found', 404
    if wager is None:
        return 'Wager needed', 400
    
    game= Game(creator_id=current_user['id'], wager=wager) 
    db.session.add(game)
    db.session.commit()
    response_body={'message':'Successful'}
    return jsonify(response_body), 200

