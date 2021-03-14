
# PcrArk-draw-card

#### 介绍
公主连结Re:Dive&明日方舟Arknights奖池页面

[后端项目地址（Gitee）](https://gitee.com/kzycn/float)

[后端项目地址（Github）](https://github.com/kzyCN/float)

#### 软件架构
vue.js

vue-cil3.0

elementUI

#### 项目进度
完成了公主连结Re:Dive基本的抽奖页面和基本抽奖逻辑

增加了后台登录界面,后台登录逻辑基本实现,后台使用SpringBoot框架,JWT进行验证

#### 预期实现功能
- 完善pcr抽奖逻辑
- 增加概率切换按钮
- 出货记录功能
- 明日方舟Arknights页面
- 活动日历（可能）

#### 未来大版本预想
- 增加后台（SpringBoot实现）
- 增加评论系统
- 增加发帖系统
- 整体更像论坛
- 适配移动端

#### 部署相关
###### 关于vue项目使用router在nginx中刷新出现404的问题
Nginx需配置如下

```nginx
server
{
    listen 80; #监听端口
    server_name pcrark.husei.cn; #站点域名
    index index.php index.html index.htm default.php default.htm default.html;# 首页设置
    root /www/wwwroot/pcrark.husei.cn; #根目录
    
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

