# PcrArk-draw-card

> [国内镜像Gitee](https://gitee.com/kzycn/PcrArk-draw-card)，[GitHub](https://github.com/kzycn/PcrArk-draw-card)

#### 介绍
公主连结Re:Dive&明日方舟Arknights奖池页面

#### 软件架构
vue.js

vue-cil3.0

elementUI

#### 部署相关
###### 关于vue项目使用router在nginx中刷新出现404的问题
Nginx需配置如下

```nginx
server
{
    listen 80; #监听端口
    server_name dc.fsyume.com; #站点域名
    index index.php index.html index.htm default.php default.htm default.html;# 首页设置
    root /www/wwwroot/dc.fsyume.com; #根目录
    
    location / {
            try_files $uri $uri/ @router;
        #需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }
}
```

