# -*- coding: utf-8 -*-
#生产环境配置文件
from config.base_setting import *
DEBUG = False

SQLALCHEMY_DATABASE_URI = "mysql://root:123456@127.0.0.1/addressbook"
SECRET_KEY = "mhrmsg"