(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{404:function(t,e,r){"use strict";r.r(e);var p=r(0),a=Object(p.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("前言：")]),t._v(" "),e("p",[t._v("无需使用DNSpod和萌精灵等工具，实现自选IP。本文V2ray安装使用v2-ui，带有web面板不容易出错。")]),t._v(" "),e("p",[t._v("一、准备")]),t._v(" "),e("p",[t._v("注册"),e("a",{attrs:{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare"),e("OutboundLink")],1),t._v("账号")]),t._v(" "),e("p",[t._v("购买顶级域名")]),t._v(" "),e("p",[t._v("VPS")]),t._v(" "),e("p",[t._v("二、安装v2-ui")]),t._v(" "),e("p",[t._v("可参考作者博客教程：https://blog.sprov.xyz/2019/08/03/v2-ui/")]),t._v(" "),e("p",[t._v("一键安装：bash <(curl -Ls https://blog.sprov.xyz/v2-ui.sh)")]),t._v(" "),e("p",[t._v("三、申请SSL证书")]),t._v(" "),e("p",[t._v("直接搜索FreeSSL申请免费SSL证书大把教程")]),t._v(" "),e("p",[t._v("也可参考v2-ui作者教程："),e("a",{attrs:{href:"https://blog.sprov.xyz/2019/04/25/apply-ssl-certificate-at-freessl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 FreeSSL 上为你的域名申请免费 SSL 证书"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("四、使用v2-ui配置V2ray")]),t._v(" "),e("p",[t._v("打开v2-ui面板：http://服务器IP:65432")]),t._v(" "),e("p",[t._v("默认用户名密码：admin")]),t._v(" "),e("p",[t._v("添加账号：")]),t._v(" "),e("p",[t._v("参数设置：（端口填写443，图上红字写错了）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j30ij0mk75k.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("五、配置ClouFlare")]),t._v(" "),e("p",[t._v("先将域名添加到CloudFlare，"),e("a",{attrs:{href:"https://www.google.com.hk/search?newwindow=1&safe=strict&sxsrf=ALeKk03e3hcrXlpn_txH7eVswR5e8OVctg%3A1610354298165&source=hp&ei=eg78X6iGCKeUmAX825zYBQ&q=%E5%9F%9F%E5%90%8D%E6%8E%A5%E5%85%A5cloudflare&oq=%E5%9F%9F%E5%90%8D&gs_lcp=CgZwc3ktYWIQARgAMgQIIxAnMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDOgcIIxDqAhAnOgIIADoECAAQCjoECAAQDFDKCVjDL2CqOGgHcAB4AIABfogBkAySAQQwLjEzmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查找教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("添加DNS解析：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j31h20orn0r.jpeg",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j31gk0okwhp.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("六、选择适合自己的IP")]),t._v(" "),e("p",[t._v("使用查找适合自己当前网络环境的优选Cloudflare Anycast IP工具："),e("a",{attrs:{href:"https://github.com/badafans/better-cloudflare-ip",target:"_blank",rel:"noopener noreferrer"}},[t._v("better-cloudflare-ip"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("七、▲▲▲重点：配置V2ray客户端")]),t._v(" "),e("p",[t._v("这里以电脑版为例，其他版本设置方法相同")]),t._v(" "),e("p",[t._v("先将之前在v2-ui上创建的账号导入V2ray客户端：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j31h00olq5h.jpeg",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j306i05pt8u.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("修改配置：")]),t._v(" "),e("p",[t._v("这里直接将选出来的IP填入服务器地址中，服务器地址填入伪装域名中达到流量走自选IP的效果，而不需要萌精灵等工具。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j30no0k9wfm.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("小技巧")]),t._v(" "),e("p",[t._v("可以直接将自选IP通过DNS解析记录到一个二级域名，将二级域名直接填入V2ray客户端服务器地址中，也就是填写自选IP的位置。对于多个用户就可以直接更改DNS解析达到更改所有自选IP的效果。如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j310m0500t4.jpeg",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/zpj874878956/images/main/img/20221212j30no0k9q3x.jpeg",alt:""}})]),t._v(" "),e("p",[t._v("原文链接：")]),t._v(" "),e("p",[t._v("https://blog.52learn.top/index.php/archives/16/")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("使用查找适合自己当前网络环境的优选Cloudflare Anycast IP")]),t._v(" "),e("p",[t._v("https://github.com/XIU2/CloudflareSpeedTest/releases")]),t._v(" "),e("p",[t._v("百度网盘文件cloudflareST")])])}),[],!1,null,null,null);e.default=a.exports}}]);