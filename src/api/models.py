from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    sent_requests = db.relationship('Request', foreign_keys=('Request.creator_id'), back_populates='creator')
    games_as_creator = db.relationship('Game', foreign_keys=('Game.creator_id'), backref='creator')
    games_as_receiver = db.relationship('Game', foreign_keys=('Game.receiver_id'), backref='receiver')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, foreign_keys=('users.id'), nullable=False)
    receiver_id = db.Column(db.Integer, foreign_keys=('users.id'), nullable=False)
    creator = db.relationship('User', foreign_keys=('creator_id'), back_populates='sent_requests')
    receiver = db.relationship('User', foreign_keys=('receiver_id'), back_populates='received_requests')
    category = db.Column(db.Boolean(), unique=False, nullable=False)
    status = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "creator": self.email,
            "receiver":self.receiver,
            "category":self.category,
            "status":self.status,
        }
class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, foreign_keys=('users.id'), nullable=False)
    receiver_id = db.Column(db.Integer, foreign_keys=('users.id'), nullable=False)
    wager = db.Column(db.Float(), nullable=False, default=0.0)
    created_at = db.Column(db.Boolean(), unique=False, nullable=False)
    creator = db.relationship('User', foreign_keys=('creator_id'), backref='games_as_creator')    
    creator_move1 = db.Column(db.String(80), unique=False, nullable=False)
    creator_move2 = db.Column(db.String(80), unique=False, nullable=False)
    creator_move3 = db.Column(db.String(80), unique=False, nullable=False)
    creator_move4 = db.Column(db.String(80), unique=False, nullable=False)
    creator_move5 = db.Column(db.String(80), unique=False, nullable=False)
    creator_move6 = db.Column(db.String(80), unique=False, nullable=False)
    receiver = db.relationship('User', foreign_keys=('receiver_id'), backref='games_as_receiver')
    receiver_move1 = db.Column(db.String(80), unique=False, nullable=False)
    receiver_move2 = db.Column(db.String(80), unique=False, nullable=False)
    receiver_move3 = db.Column(db.String(80), unique=False, nullable=False)
    receiver_move4 = db.Column(db.String(80), unique=False, nullable=False)
    receiver_move5 = db.Column(db.String(80), unique=False, nullable=False)
    receiver_move6 = db.Column(db.String(80), unique=False, nullable=False)
    result = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "creator": self.creator,
            "creator_move1": self.creator_move1,
            "creator_move2": self.creator_move2,
            "creator_move3": self.creator_move3,
            "creator_move4": self.creator_move4,
            "creator_move5": self.creator_move5,
            "creator_move6": self.creator_move6,
            "receiver": self.receiver,
            "receiver_move1": self.receiver_move1,
            "receiver_move2": self.receiver_move2,
            "receiver_move3": self.receiver_move3,
            "receiver_move4": self.receiver_move4,
            "receiver_move5": self.receiver_move5,
            "receiver_move6": self.receiver_move6,
            "created_at": self.created_at,
            "result": self.result,
        }
# Request with pending/accepted
# change status to accepted and all info associated with the game
# Automaticlly play the game if it been pass 1hr since creation