## 运行说明

数据库

请在 config 文件夹下修改对应的数据库链接 URI `SQLALCHEMY_DATABASE_URI = "mysql://root:123456@127.0.0.1/addressbook"`修改 mysql://你的用户名:你的密码@主机地址/数据库名。

首先需要创建 **addressBook** 数据库，编码为 **utf-8** ，如果自定义其他数据库名，则需要在 config 下修改对应的配置。
关于 **config**  如果需要修改加载哪一个文件，则需要到 **application** 中修改。

将 addressbook.sql 执行， 将数据导入数据库中。


## python 环境

在你所需要的python环境中，打开 终端 。
运行  `pip install -r requirements.txt`


## 运行

在终端中输入 ` python manage.py runserver ` 
当命令行中提示 `run: 0.0.0.0:5000` 
在浏览器中访问 localhost:5000 即可运行本项目


## 线上发布说明

需要更改连结数据库方式，或使用定时任务，否则会出现8小时连结异常问题。