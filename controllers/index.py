# -*- coding: utf-8 -*-
import time

from flask import Blueprint, render_template, g, request, make_response
from common.models.addressbook import Addressbook
from common.models.addressbook import db
from common.libs.Helper import ops_renderJSON, ops_renderErrJSON

index_page = Blueprint("index_page", __name__)
from common.libs.Helper import iPagenation
import re
from sqlalchemy import or_


@index_page.route("/login")
def login():
    return render_template("login.html")


@index_page.route("/")
def index():
    if g.current_user == None:
        return render_template("login.html")

    req = request.values

    # 分页
    page = 1
    if 'p' in req and req['p']:
        page = int(req['p'])
    try:
        db.session.commit()
        query = Addressbook.query
    except InvalidRequestError:
        db.session.rollback()
    except Exception as e:
        print(e)
    page_params = {
        'total_count': query.count(),
        "page_size": 10,
        'page': page,
        'url': "/?"
    }
    pages = iPagenation(page_params)
    offset = (page - 1) * page_params['page_size']
    limit = page * page_params['page_size']
    db.session.commit()
    query = query.order_by(Addressbook.id.desc(), Addressbook.username.desc())
    listData = query[offset:limit]
    # 查找
    # flg 用于条件查询
    flg = False
    if 'condition' in req and req['condition']:
        condition = req['condition']
        address = Addressbook.query.filter(or_(Addressbook.username.like("%" + condition + "%"),
                                               Addressbook.phoneMusic.like("%" + condition + "%"),
                                               Addressbook.company.like("%" + condition + "%"),
                                               Addressbook.phoneNumber.like("%" + condition + "%"),
                                               Addressbook.email.like("%" + condition + "%"),
                                               Addressbook.address.like("%" + condition + "%")
                                               )).all()
        # 生日模糊查询匹配 Addressbook.birthDay.like("%" + condition + "%"),
        if re.search(r"(\d{4}-\d{1,2}-\d{1,2})", condition) is not None:
            addressBir = Addressbook.query.filter(Addressbook.birthDay == condition).all()
            if addressBir is not None:
                address = addressBir

        page_params["total_count"] = len(address)
        pages = iPagenation(page_params)
        offset = (page - 1) * page_params['page_size']
        limit = page * page_params['page_size']
        listData = address[offset:limit]
        flg = True
    if not flg:
        context = {"name": g.current_user.username, "data": listData, "pages": pages}
    else:
        context = {"name": g.current_user.username, "data": listData, "pages": pages, "isCondition": flg,
                   "condition": condition}
    db.session.close()
    return render_template("index.html", **context)


# 详细信息
@index_page.route("/info", methods=["GET", "POST"])
def info():
    req = request.values
    id = req['id'] if 'id' in req else ''
    db.session.commit()
    res = Addressbook.query.filter_by(id=id).first()
    if res is None:
        response = make_response(ops_renderErrJSON())
        return response
    else:
        st = res.birthDay.strftime('%Y-%m-%d')
        response = make_response(ops_renderJSON(code="200",
                                                data={"id": id, "username": res.username, "company": res.company,
                                                      "phoneNumber": res.phoneNumber, "email": res.email,
                                                      "backup": res.backup,
                                                      "address": res.address,
                                                      "birthDay": st,
                                                      "phoneMusic": res.phoneMusic
                                                      }))
        db.session.expire_all()

    db.session.close()
    return response


# 修改
@index_page.route("/alter", methods=["GET", "POST"])
def alter():
    res = request.values
    id = res['id'] if 'id' in res else ''
    db.session.commit()
    update = Addressbook.query.filter_by(id=id).first()
    if 'username' in res:
        update.username = res['username']
    if 'company' in res:
        update.company = res['company']
    if 'phoneNumber' in res:
        update.phoneNumber = res['phoneNumber']
    if 'email' in res:
        update.email = res['email']
    if 'backup' in res:
        update.backup = res['backup']
    if 'address' in res:
        update.address = res['address']
    if 'birthDay' in res:
        update.birthDay = res['birthDay']
    if 'phoneMusic' in res:
        update.phoneMusic = res['phoneMusic']
    db.session.add(update)
    db.session.commit()
    if update is None:
        response = make_response(ops_renderErrJSON())
        return response
    else:
        response = make_response(ops_renderJSON(code="200"))

    db.session.close()
    return response


# 查找
# @index_page.route("/find",methods = [ "GET","POST" ])
# def find():
#     req = request.values
#     condition = req['condition'] if 'condition' in req else ''
#     if condition != '':
#         address = Addressbook.query.filter(or_(Addressbook.username.like("%" + condition + "%"),
#                                      Addressbook.phoneMusic.like("%" + condition + "%"),
#                                      Addressbook.company.like("%" + condition + "%"),
#                                      Addressbook.phoneNumber.like("%" + condition + "%"),
#                                      Addressbook.birthDay.like("%" + condition + "%"),
#                                      Addressbook.email.like("%" + condition + "%")
#                                      )).all()
#     if condition is None:
#         response = make_response(ops_renderErrJSON())
#         return response
#     else:
#         response = make_response(ops_renderJSON(code="200"),data=address)
#     return response


# 添加
@index_page.route("/add", methods=["GET", "POST"])
def add():
    res = request.values
    address = Addressbook(id=None)

    if 'username' in res:
        address.username = res['username']
    if 'company' in res:
        address.company = res['company']
    if 'phoneNumber' in res:
        address.phoneNumber = res['phoneNumber']
    if 'email' in res:
        address.email = res['email']
    if 'backup' in res:
        address.backup = res['backup']
    if 'address' in res:
        address.address = res['address']
    if 'birthDay' in res:
        address.birthDay = res['birthDay']
    if 'phoneMusic' in res:
        address.phoneMusic = res['phoneMusic']
    if address.birthDay == '':
        address.birthDay = time.strftime("%Y-%m-%d", time.localtime())
    db.session.add(address)
    db.session.commit()
    if address is None:
        response = make_response(ops_renderErrJSON())
        return response
    else:
        response = make_response(ops_renderJSON(code="200"))
    db.session.close()
    return response


# 删除
@index_page.route("/delete", methods=["GET", "POST"])
def delete():
    res = request.values
    id = res['id'] if 'id' in res else ''
    deleteAdd = Addressbook.query.get(id)
    db.session.delete(deleteAdd)
    db.session.commit()
    if delete is None:
        response = make_response(ops_renderErrJSON())
        return response
    else:
        response = make_response(ops_renderJSON(code="200"))
    db.session.close()
    return response





