from flask_sqlalchemy import SQLAlchemy
import random, enum
db = SQLAlchemy()
from datetime import datetime

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # Fixed relationship with Game table
    games_as_creator = db.relationship('Game', foreign_keys='Game.creator_id', backref='creator')
    games_as_receiver = db.relationship('Game', foreign_keys='Game.receiver_id', backref='receiver')
    def __repr__(self):
        return f'<User {self.email}>'
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class MoveTypes(enum.Enum):
    Rock = "Rock"
    Paper = "Paper"
    Scissor = "Scissor"
class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, unique=False)
    db.UniqueConstraint('creator_id', 'receiver_id',name='uq_game_creator_receiver')
    wager = db.Column(db.Float(), nullable=False, default=0.0)
    created_at = db.Column(db.DateTime(timezone=False), unique=False, nullable=True, default=datetime.now())
    creator_move1 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    creator_move2 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    creator_move3 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    creator_move4 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    creator_move5 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    receiver_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True, unique=False)
    receiver_move1 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    receiver_move2 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    receiver_move3 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    receiver_move4 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    receiver_move5 = db.Column(db.Enum(MoveTypes), unique=False, nullable=True, default=random.choice(['Rock', 'Paper', 'Scissor']))
    result = db.Column(db.Integer)
    # def __repr__(self):
    #     return f'<Game {self.id}>'

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "creator": self.creator_id,
    #         "receiver": self.receiver_id,
    #         "created_at": self.created_at,
    #         "result": self.result,
    #     }
