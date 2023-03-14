(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{426:function(t,e,l){"use strict";l.r(e);var s=l(0),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"rsync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[t._v("#")]),t._v(" rsync")]),t._v(" "),e("p",[t._v("rsync的目的是实现本地主机和远程主机上的文件同步(包括本地推到远程，远程拉到本地两种同步方式)，也可以实现本地不同路径下文件的同步，但不能实现远程路径1到远程路径2之间的同步(scp可以实现)。")]),t._v(" "),e("p",[t._v("不考虑rsync的实现细节，就文件同步而言，涉及了源文件和目标文件的概念，还涉及了以哪边文件为同步基准。例如，想让目标主机上的文件和本地文件保持同步，则是以本地文件为同步基准，将本地文件作为源文件推送到目标主机上。反之，如果想让本地主机上的文件和目标主机上的文件保持同步，则目标主机上的文件为同步基准，实现方式是将目标主机上的文件作为源文件拉取到本地。当然，要保持本地的两个文件相互同步，rsync也一样能实现，这就像Linux中cp命令一样，以本地某文件作为源，另一文件作为目标文件，但请注意，虽然rsync和cp能达到相同的目的，但它们的实现方式是不一样的。")]),t._v(" "),e("p",[t._v("既然是文件同步，在同步过程中必然会涉及到源和目标两文件之间版本控制的问题，例如是否要删除源主机上没有但目标上多出来的文件，目标文件比源文件更新(newer than source)时是否仍要保持同步，遇到软链接时是拷贝软链接本身还是拷贝软链接所指向的文件，目标文件已存在时是否要先对其做个备份等等。")]),t._v(" "),e("p",[e("strong",[t._v("rsync同步过程中由两部分模式组成：决定哪些文件需要同步的检查模式以及文件同步时的同步模式。")])]),t._v(" "),e("p",[t._v('(1).检查模式是指按照指定规则来检查哪些文件需要被同步，例如哪些文件是明确被排除不传输的。**默认情况下，rsync使用"quick check"算法快速检查源文件和目标文件的大小、mtime(修改时间)是否一致，如果不一致则需要传输。**当然，也可以通过在rsync命令行中指定某些选项来改变quick check的检查模式，比如"--size-only"选项表示"quick check"将仅检查文件大小不同的文件作为待传输文件。rsync支持非常多的选项，其中检查模式的自定义性是非常有弹性的。')]),t._v(" "),e("p",[t._v("(2).同步模式是指在文件确定要被同步后，在同步过程发生之前要做哪些额外工作。例如上文所说的是否要先删除源主机上没有但目标主机上有的文件，是否要先备份已存在的目标文件，是否要追踪链接文件等额外操作。rsync也提供非常多的选项使得同步模式变得更具弹性。")]),t._v(" "),e("p",[t._v("相对来说，为rsync手动指定同步模式的选项更常见一些，只有在有特殊需求时才指定检查模式，因为大多数检查模式选项都可能会影响rsync的性能。")]),t._v(" "),e("p",[t._v("rsync 的命令格式（用法）为：")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("1）本地使用：\n\n\n\nrsync [OPTION...] SRC... [DEST]\n\n\n\n\n\n\n\n2）通过远程 Shell 使用：\n\n\n\n拉: rsync [OPTION...] [USER@]HOST:SRC... [DEST]\n\n\n\n推: rsync [OPTION...] SRC... [USER@]HOST:DEST\n\n\n\n\n\n\n\n3）访问 rsync 服务器:\n\n\n\n拉: rsync [OPTION...] [USER@]HOST::SRC... [DEST]\n\n\n\n推: rsync [OPTION...] SRC... [USER@]HOST::DEST\n\n\n\n拉: rsync [OPTION...] rsync://[USER@]HOST[:PORT]/SRC... [DEST]\n\n\n\n推: rsync [OPTION...] SRC... rsync://[USER@]HOST[:PORT]/DEST\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br")])]),e("p",[t._v("其中：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SRC: 是要复制的源位置")])]),t._v(" "),e("li",[e("p",[t._v("DEST: 是复制目标位置")])]),t._v(" "),e("li",[e("p",[t._v("若本地登录用户与远程主机上的用户一致，可以省略 USER@")])]),t._v(" "),e("li",[e("p",[t._v("使用远程 shell 同步时，主机名与资源之间使用单个冒号“:”作为分隔符")])]),t._v(" "),e("li",[e("p",[t._v("使用 rsync 服务器同步时，主机名与资源之间使用两个冒号“::”作为分隔符")])]),t._v(" "),e("li",[e("p",[t._v("当访问 rsync 服务器时也可以使用 rsync:// URL")])]),t._v(" "),e("li",[e("p",[t._v("“拉”复制是指从远程主机复制文件到本地主机")])]),t._v(" "),e("li",[e("p",[t._v("“推”复制是指从本地主机复制文件到远程主机")])]),t._v(" "),e("li",[e("p",[t._v("当进行“拉”复制时，若指定一个 SRC 且省略 DEST，则只列出资源而不进行复制")]),t._v(" "),e("p",[t._v("下面列出常用选项：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-a, ––archive")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("归档模式，表示以递归方式传输文件，并保持所有文件属性，等价于 -rlptgoD (注意不包括 -H)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-r, ––recursive")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对子目录以递归模式处理")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-l, ––links")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持符号链接文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-H, ––hard-links")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持硬链接文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-p, ––perms")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持文件权限")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-t, ––times")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持文件时间信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-g, ––group")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持文件属组信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-o, ––owner")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持文件属主信息 (super-user only)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-D")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保持设备文件和特殊文件 (super-user only)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-z, ––compress")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在传输文件时进行压缩处理")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––exclude=PATTERN")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定排除一个不需要传输的文件匹配模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––exclude-from=FILE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 FILE 中读取排除规则")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––include=PATTERN")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定需要传输的文件匹配模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––include-from=FILE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 FILE 中读取包含规则")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––copy-unsafe-links")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("拷贝指向SRC路径目录树以外的链接文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––safe-links")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("忽略指向SRC路径目录树以外的链接文件（默认）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––existing")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅仅更新那些已经存在于接收端的文件，而不备份那些新创建的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––ignore-existing")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("忽略那些已经存在于接收端的文件，仅备份那些新创建的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-b, ––backup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当有变化时，对目标目录中的旧版文件进行备份")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––backup-dir=DIR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("与 -b 结合使用，将备份的文件存到 DIR 目录中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––link-dest=DIR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当文件未改变时基于 DIR 创建硬链接文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delete")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除那些接收端还有而发送端已经不存在的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delete-before")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("接收者在传输之前进行删除操作 (默认)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delete-during")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("接收者在传输过程中进行删除操作")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delete-after")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("接收者在传输之后进行删除操作")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delete-excluded")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在接收方同时删除被排除的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-e, ––rsh=COMMAND")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定替代 rsh 的 shell 程序")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––ignore-errors")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("即使出现 I/O 错误也进行删除")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––partial")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("保留那些因故没有完全传输的文件，以是加快随后的再次传输")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––progress")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在传输时显示传输过程")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-P")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("等价于 ––partial ––progress")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––delay-updates")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("将正在更新的文件先保存到一个临时目录（默认为 “.~tmp~”），待传输完毕再更新目标文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-v, ––verbose")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("详细输出模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-q, ––quiet")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("精简输出模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-h, ––human-readable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输出文件大小使用易读的单位（如，K，M等）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-n, ––dry-run")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示哪些文件将被传输")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––list-only")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅仅列出文件而不进行复制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––rsyncpath=PROGRAM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定远程服务器上的 rsync 命令所在路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––password-file=FILE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("从 FILE 中读取口令，以避免在终端上输入口令，通常在 cron 中连接 rsync 服务器时使用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-4, ––ipv4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用 IPv4")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-6, ––ipv6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用 IPv6")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("打印版本信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("––help")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示帮助信息")])])])])]),t._v(" "),e("li",[e("p",[t._v("若使用普通用户身份运行 rsync 命令，同步后的文件的属主将改变为这个普通用户身份。")])]),t._v(" "),e("li",[e("p",[t._v("若使用超级用户身份运行 rsync 命令，同步后的文件的属主将保持原来的用户身份。")])])]),t._v(" "),e("p",[t._v("摘自：")]),t._v(" "),e("p",[t._v("https://www.cnblogs.com/noxy/p/8986164.html")]),t._v(" "),e("p",[t._v("http://www.cnblogs.com/f-ck-need-u/p/7220009.html")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/woshiji594167/article/details/83860993")])])}),[],!1,null,null,null);e.default=a.exports}}]);