# coding: utf-8
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



class User(db.Model):
    __tablename__ = 'user'

    username = db.Column(db.String(255, 'utf8_bin'), primary_key=True)
    password = db.Column(db.String(255, 'utf8_bin'))
    permission = db.Column(db.String(255, 'utf8_bin'))
    email = db.Column(db.String(255, 'utf8_bin'))
    phoneNum = db.Column(db.VARBINARY(255))
