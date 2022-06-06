# -*- coding: utf-8 -*-
from flask import Flask
from flask_script import Manager
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

manager = Manager(app)

app.config.from_pyfile("config/base_setting.py")
# app.config.from_pyfile("config/local_setting.py")
app.config.from_pyfile("config/production_setting.py")
# ops_config=local|production
# linux export ops_config=local|production
# windows set ops_config=local|production
if "ops_config" in os.environ:
    app.config.from_pyfile("config/%s_setting.py" % (os.environ['ops_config']))

db = SQLAlchemy(app)

# sql连结 8 小时断一次，设置定时任务:
# from flask_apscheduler import APScheduler
# aps = APScheduler()
# class Config(object):
#     JOBS = [
#         {
#             'id': 'job1',
#             'func': 'application:task',
#             'args': (1, 2),
#             'trigger': 'interval',
#             'seconds': 7200
#         }
#     ]
#     SCHEDULER_API_ENABLED = True

# from common.models.addressbook import Addressbook

# def task():
#     print("执行定时任务")
#     query = Addressbook.query
#     try:
#         db.session.commit()
#     except:
#         db.session.rollback()
#         raise
#     finally:
#         db.session.close()  # optional, depends on use case


# app.config.from_object(Config())
# scheduler = APScheduler()
# scheduler.init_app(app)
# scheduler.start()