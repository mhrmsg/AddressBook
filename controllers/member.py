# -*- coding: utf-8 -*-
from application import app, db
from flask import Blueprint, request, make_response
from common.libs.Helper import ops_renderJSON, ops_renderErrJSON, ops_render
from common.models.user import User
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.exc import PendingRollbackError

member_page = Blueprint("member_page", __name__)


@member_page.route("login.html", methods=["GET", "POST"])
def reg():
    if request.method == "GET":
        return ops_render("login.html")


@member_page.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return ops_render("member/login.html")

    req = request.values
    login_name = req['login_name'] if 'login_name' in req else ''
    login_pwd = req['login_pwd'] if 'login_pwd' in req else ''
    if login_name is None or len(login_name) < 1:
        return ops_renderErrJSON("请输入正确的登录用户名~~")
    user_info = None
    if login_pwd is None or len(login_pwd) < 1:
        return ops_renderErrJSON("请输入正确的登录密码~~")
    try:
        user_info = User.query.filter_by(username=login_name).first()
        db.session.commit()
        db.session.close()
    except InvalidRequestError:
        db.session.rollback()
        db.session.close()
    except PendingRollbackError:
        db.session.rollback()
    except Exception as e:
        print(e)

    if not user_info:
        return ops_renderErrJSON("请输入正确的登录用户名和密码 -1~~")

    if login_pwd != user_info.password:
        return ops_renderErrJSON("请输入正确的登录用户名和密码 -2 ~~")

    response = make_response(ops_renderJSON(msg="登录成功~~"))
    response.set_cookie(app.config['AUTH_COOKIE_NAME'],
                        "%s#%s" % (user_info.username, user_info.password), 60 * 60 * 24 * 120)
    return response


@member_page.route("/reguser", methods=["GET", "POST"])
def reguser():
    if request.method == "GET":
        return ops_render("member/login.html")

    req = request.values
    reg_name = req['reg_name'] if 'reg_name' in req else ''
    reg_pwd = req['reg_pwd'] if 'reg_pwd' in req else ''
    print(reg_pwd)
    if reg_name is None or len(reg_name) < 1:
        return ops_renderErrJSON("请输入正确的登录用户名~~")

    if reg_pwd is None or len(reg_pwd) < 1:
        return ops_renderErrJSON("请输入正确的登录密码~~")

    user_info = User.query.filter_by(username=reg_name).first()

    try:
        db.session.commit()
    except:
        db.session.rollback()
        raise
    finally:
        db.session.close()  # optional, depends on use case

    if user_info:
        return ops_renderErrJSON("用户名重复 -1~~")
    else:
        model_user = User()
        model_user.username = reg_name
        model_user.password = reg_pwd
        db.session.add(model_user)
        db.session.commit()

    response = make_response(ops_renderJSON(msg="注册~~"))
    return response
