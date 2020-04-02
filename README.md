# html-mix

做项目的初衷：
    最近的一个web项目，我又开始做前端的老本行切图，写惯了react、vue，习惯了组件化的开发习惯，我发现切图的公用部分无法自动分离，客户的需求经常改动我就要一个一个页面的改动，查了很多的前端工具，有的要安装glup，有的用到了ejs，就是个小功能不想装这么多的插件，我就用node做了一个，希望大家多多使用。

## 安装

使用 npm:

```bash
$ npm install html-mix -g
```
创建文件夹html-mix

```bash
$ mkdir html-mix
```
进入文件夹

```bash
$ cd html-mix
```
创建文件夹src、public、build

```bash
$ mkdir src,public,build
```

## 目录结构
```html
  src //原始html目录
  public  //通用html目录
  build  //生成文件目录
```
## 例子

Usage


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
   @include(header.html)@
   <div class="main">
   
   </div>
   @include(footer.html)@
</body>
</html>
```
## 执行合并

```bash
$ mix
```
## 效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
   <!-- head start -->
   <header class="head">
    头部
   </header>
  <!-- head end -->
   <div class="main">
   
   </div>
   <!-- foot start -->
    <footer>
      底部
    </footer>
    <!-- foot end -->
</body>
</html>
```