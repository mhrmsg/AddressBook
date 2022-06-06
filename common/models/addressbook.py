# coding: utf-8
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



class Addressbook(db.Model):
    __tablename__ = 'addressbook'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20, 'utf8_bin'))
    company = db.Column(db.String(100, 'utf8_bin'))
    phoneNumber = db.Column(db.String(20, 'utf8_bin'))
    email = db.Column(db.String(30, 'utf8_bin'))
    backup = db.Column(db.String(255, 'utf8_bin'))
    address = db.Column(db.String(255, 'utf8_bin'))
    birthDay = db.Column(db.Date)
    phoneMusic = db.Column(db.String(20, 'utf8_bin'))
    avatar_url = db.Column(db.String(255, 'utf8_bin'))
    premission = db.Column(db.String(20, 'utf8_bin'))


