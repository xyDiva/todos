# todos

模仿[wunderlist](https://www.wunderlist.com/)开发的一个gadget.

访问地址:[TODO](https://xydiva.herokuapp.com) 

龟速进行中...

##使用的技术如下(MEAN):

```
angularJs
nodeJs
express
mongoDb
```

##开发中主要执行的命令:

```
mongod 连接数据库
nodemon 启动程序
```

##开发中参考的教程文档:

- [辰风君的笔记本:MEAN全栈开发](http://gocwind.com/blog/categories/mean/)

- [Mongoose学习参考文档](https://cnodejs.org/topic/504b4924e2b84515770103dd)

- [markdown语法](http://wowubuntu.com/markdown/)

##开发中遇到的问题集合:

- angular的URL中自动附加'#'的问题  
reference:  
1.[HTML5Mode](https://gist.github.com/jrmoran/4277025)  
2.[AngularJS去掉的URL里的#号](http://blog.fens.me/angularjs-url/)

- angular模板404  
angular的路由是建立在express路由基础之上,前端访问的所有静态资源需要在后端进行配置，例如：  
`app.use(express.static(path.join(__dirname, 'views')));`  
可以访问[localhost:3000/index.html](localhost:3000/index.html)判定路径是否设置成功.


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
