(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{380:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("原文链接：https://www.cnblogs.com/lvzhenjiang/p/14374243.html")]),s._v(" "),a("h1",{attrs:{id:"anisble批量安装node-exporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anisble批量安装node-exporter"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14374243.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("anisble批量安装node_exporter"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("目录")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14374243.html#%E4%B8%80%E3%80%81%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[s._v("一、目录结构"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14374243.html#%E4%BA%8C%E3%80%81playbook%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("二、playbook文件"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14374243.html#%E4%B8%89%E3%80%81%E6%9C%8D%E5%8A%A1%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("三、服务文件"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14374243.html#%E5%9B%9B%E3%80%81%E4%BB%BB%E5%8A%A1%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("四、任务文件"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"一、目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、目录结构"}},[s._v("#")]),s._v(" 一、目录结构")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ tree "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- hosts\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- node_exporter\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- files\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- node_exporter-1.0.1.linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-- node_exporter.service\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-- tasks\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-- main.yml\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-- node_exporter.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"二、playbook文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、playbook文件"}},[s._v("#")]),s._v(" 二、playbook文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" node_exporter.yml \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env ansible-playbook")]),s._v("\n- hosts: all\n  remote_user: root\n  gather_facts: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  roles:\n  - role: node_exporter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"三、服务文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、服务文件"}},[s._v("#")]),s._v(" 三、服务文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" node_exporter/files/node_exporter.service \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Prometheus node_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Requires")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target remote-fs.target\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target remote-fs.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/node_exporter/node_exporter --web.listen-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9100\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-HUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("process\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5s\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"四、任务文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、任务文件"}},[s._v("#")]),s._v(" 四、任务文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" node_exporter/tasks/main.yml \n- name: 安装node_exporter\n  unarchive: \n    src: node_exporter-1.0.1.linux-amd64.tar.gz\n    dest: /usr/local/\n\n- name: 创建软链接\n  file:\n    src: /usr/local/node_exporter-1.0.1.linux-amd64\n    dest: /usr/local/node_exporter\n    state: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n\n- name: 添加node_exporter服务\n  copy: \n    src: node_exporter.service\n    dest: /usr/lib/systemd/system/\n\n- name: daemon-reload\n  systemd: \n    daemon_reload: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n- name: 设置开机自动启动\n  systemd: \n    name: node_exporter\n    state: started\n    enabled: True\n\n- name: 确定端口在监听\n  wait_for:\n    host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v("\n    delay: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("*************** 当你发现自己的才华撑不起野心时，就请安静下来学习吧！***************")])])}),[],!1,null,null,null);a.default=t.exports}}]);