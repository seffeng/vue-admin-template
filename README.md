# vue-admin-template

## 安装[Project setup]
```shell
# clone the project
git clone https://github.com/seffeng/vue-admin-template.git

# enter the project directory
cd vue-admin-template

# install dependency
npm install

# develop
npm run dev
```

### 构建[Build]
```shell
# Compiles and minifies for development
npm run build:dev

# Compiles and minifies for testing
npm run build:test

# Compiles and minifies for staging
npm run build:stage

# Compiles and minifies for production
npm run build:prod
```

### 代码检查[Lints and fixes files]

```shell
npm run lint
```

### 注意

```shell
# 参考 router/test.js

# 1、注意修改配置文件 .env.*
# 2、请搜索“此处代码可能需要修改！”部分确定是否根据业务修改代码
# 3、路由配置属性 路由只支持2级，即只能有一个 children
# 4、路由配置属性 meta.requiresAuth:false 时代表不需要登录可访问（boolean false，非字符串）
# 5、路由配置属性 meta.allow:true 时代表不受权限控制，可直接访问
# 6、路由配置属性 meta.hidden:true 代表隐藏该菜单
```

### 参考[Customize configuration]

See [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template).

See [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/).

See [Configuration Reference](https://cli.vuejs.org/config/).