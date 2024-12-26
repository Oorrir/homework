# 仿站电商平台

这是一个仿站电商平台项目，包含前端页面和相关的JavaScript逻辑处理。项目使用HTML、CSS和JavaScript构建，支持用户登录、注册、商品浏览、商品详情查看、个人中心和密码修改等功能。

## 功能模块

1. **首页(index.html)**
   - 展示轮播图和商品链接。
   - 用户登录状态显示和个人中心入口。

2. **商品列表页(list.html)**
   - 展示商品列表，支持分页功能。

3. **商品详情页(goods.html)**
   - 展示单个商品的详细信息。

4. **登录页(login.html)**
   - 用户登录表单。

5. **注册页(registe.html)**
   - 用户注册表单。

6. **个人中心页(self.html)**
   - 用户信息展示和修改。

7. **修改密码页(pwd.html)**
   - 用户修改密码功能。

## 技术栈

- **HTML/CSS**: 用于构建页面结构和样式。
- **JavaScript**: 用于实现页面逻辑和交互。
- **Axios**: 用于HTTP请求，与后端API通信。

## 目录结构

```plaintext
project-root/
|-- css/                # 存放CSS样式文件
|   |-- goods.css
|   |-- index.css
|   |-- list.css
|   |-- login.css
|   |-- pwd.css
|   |-- registe.css
|   |-- self.css
|   |-- styles.css
|-- html/                # 存放HTML页面文件
|   |-- goods.html
|   |-- index.html
|   |-- list.html
|   |-- login.html
|   |-- registe.html
|   |-- self.html
|   |-- pwd.html
|-- img/                 # 存放图片资源
|   |-- img1.jpg
|   |-- img2.jpg
|   |-- img3.jpg
|   |-- img4.jpg
|   |-- img5.jpg
|-- js/                  # 存放JavaScript脚本文件
|   |-- goods.js
|   |-- http.js
|   |-- list.js
|   |-- login.js
|   |-- pwd.js
|   |-- registe.js
|   |-- script.js
|   |-- self.js
|-- lib/                 # 存放第三方库文件
|   |-- axios.min.js
|   |-- swiper/
|       |-- swiper-bundle.min.css
|       |-- swiper-bundle.min.js