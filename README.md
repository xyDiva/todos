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

###angular

- angular的URL中自动附加'#'的问题  
reference:  
1.[HTML5Mode](https://gist.github.com/jrmoran/4277025)  
2.[AngularJS去掉URL里的#号](http://blog.fens.me/angularjs-url/)

- angular模板404  
angular的路由是建立在express路由基础之上,前端访问的所有静态资源需要在后端进行配置，例如：  
`app.use(express.static(path.join(__dirname, 'views')));`  
可以访问[localhost:3000/index.html](localhost:3000/index.html)判定路径是否设置成功.

- 文件组织  
文件结构根据功能划分：  
reference:  
1.[如何组织大型JavaScript应用中的代码？](http://www.csdn.net/article/1970-01-01/2815077)  

- 按需加载样式表  
reference:  
1.[How to include view/partial specific styling in AngularJS](http://stackoverflow.com/questions/15193492/how-to-include-view-partial-specific-styling-in-angularjs)  
2.[Conditionally-rendering css in html head](http://stackoverflow.com/questions/11912330/conditionally-rendering-css-in-html-head)  
3._[angular-css](https://github.com/door3/angular-css)_


- 按需加载controller  
reference:  
1.[按需加载 AngularJS 的 Controller](http://beginor.github.io/2014/12/20/angularjs-controller-load-on-demand.html)  

- 一个奇怪的问题:当前路由改变的时候(比如从`localhost:3000/todo`跳转到`localhost:3000/todo/1`),静态资源的请求路径会自动添加`todo/`目录，从而导致404错误.  
所有静态资源都使用绝对路径的方式引用.例如`src="js/index.js"` 改为 `src="/js/index.js"`  


###express

- How to set up env as production?

- How  to use .html template on express?  
reference:  
1.[Render basic HTML view in Node JS Express?](http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express?lq=1)  
2:[How to use EJS template engine on Express?](http://tipstak.blogspot.com/2014/01/how-to-use-ejs-template-engine-on-express.html)  
3.[nodejs express template (模版)的使用 (ejs + express)](http://www.cnblogs.com/rubylouvre/p/3421805.html)

- ejs模板后缀名修改为html后页面无法解析


## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
