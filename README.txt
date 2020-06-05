## Example files for the title:  

# Learning Node, by Shelley Powers

[![Learning Node, by Shelley Powers](http://akamaicovers.oreilly.com/images/9781449323073/cat.gif)](https://www.safaribooksonline.com/library/view/title/9781449326128//)

The following applies to example files from material published by O’Reilly Media, Inc. Content from other publishers may include different rules of usage. Please refer to any additional usage rights explained in the actual example files or refer to the publisher’s website.

O'Reilly books are here to help you get your job done. In general, you may use the code in O'Reilly books in your programs and documentation. You do not need to contact us for permission unless you're reproducing a significant portion of the code. For example, writing a program that uses several chunks of code from our books does not require permission. Answering a question by citing our books and quoting example code does not require permission. On the other hand, selling or distributing a CD-ROM of examples from O'Reilly books does require permission. Incorporating a significant amount of example code from our books into your product's documentation does require permission.

We appreciate, but do not require, attribution. An attribution usually includes the title, author, publisher, and ISBN.

If you think your use of code examples falls outside fair use or the permission given here, feel free to contact us at permissions@oreilly.com.

Please note that the examples are not production code and have not been carefully testing. They are provided "as-is" and come with no warranty of any kind.

《Node学习指南》配套源代码

源代码下载地址：https://resources.oreilly.com/examples/0636920024606/

Chapter01 第1章 Node.js：启动与运行
    01. helloworld.js                                   ===> 使用 Node 创建 Hello, World 程序
    02. OpenAndWriteFile.js                             ===> 异步方式打开文件并写入数据
    03. PrintNumberAndFileContent.js                    ===> 输出数字序列和文件内容的服务程序
    04. TestThreeExamples.js                            ===> 第3个示例的测试程序

Chapter02 第2章 Node 与 REPL
    01. CustomREPL.js                                   ===> 定制 REPL
    02. MonitorTcpSocket.js                             ===> 使用 REPL 监听 TCP socket
    03. PreloadedModules.js                             ===> 创建可以预加载模块的自定义 REPL

Chapter03 第3章 Node 核心库
    01. StdinAndStdout.js                               ===> 使用 stdin 和 stdout 来读取和写入数据（回显）
    02. SetTimeout.js                                   ===> setTimeout 函数的使用
    03. TCPServer.js                                    ===> 一个简单的 TCP 服务器，并在端口 8124 上监听客户端连接请求
    04. TCPClient.js                                    ===> 使用 TCP 客户端套接字发送数据给 TCP 服务端
    05. UnixHttpServer.js                               ===> 基于 Unix 套接字的 HTTP 服务器
    06. ConnectUnixHttpServer.js                        ===> 连接到 Unix 套接字并输出接收的数据
    07. UDPClient.js                                    ===> UDP 客户端，将输入到终端的信息通过 UDP 套接字发送出去
    08. UDPServer.js                                    ===> 创建 UDP 服务端，绑定 8124 端口并接收数据
    09. Readline.js                                     ===> 使用 Readline 库创建一个简单的命令驱动型用户界面
    10. PwdProcess.js                                   ===> 创建一个子进程并调用 Unix 的 pwd 命令来显示当前目录 (child_process 模块已经不可用了)
    11. SimulateProcessPipeline.js                      ===> 使用子进程实现对包含有关键词 "test" 的文件名的目录递归搜索 (child_process 模块已经不可用了)
    12. WindowsProcess.js                               ===> 在 Windows 系统中运行一个子进程
    13. DnsUse.js                                       ===> 使用 dns 模块进行域名解析
    14. UrlUse.js                                       ===> 使用 url 模块解析URL
    15. Utilities.js                                    ===> 使用 util.inherits 方法实现继承
    16. EventEmitterDemo.js                             ===> EventEmitter 基本功能示例
    17. InheritEventEmitter.js                          ===> 通过继承 EventEmitter 创建支持时间功能的对象

Chapter04 第4章 Node 模块系统
    01. ColorsUse.js                                    ===> 使用 Colors 模块
    02. OptimistUse.js                                  ===> 使用 Optimist 模块
    03. OptimistUse2.js                                 ===> 使用 Optimist 模块处理长选项
    04. UnderscoreUse.js                                ===> 使用 Underscore 模块
    05. CustomModule                                    ===> 打包整个目录
    06. InputChecker                                    ===> 自定义模块
    07. InputCheckerTest.js                             ===> 测试 InputChecker 自定义模块

Chapter05 第5章 控制流、异步模式和异常处理

Chapter06 第6章 路由寻址、服务文件和中间件

Chapter07 第7章 Express 框架

Chapter08 第8章 Express、模板系统和 CSS

Chapter09 第9章 结构化数据、Node 和 Redis

Chapter10 第10章 Node 和 MongoDB：文档中心数据

Chapter11 第11章 Node 与关系型数据库

Chapter12 第12章 图形和 HTML5 Video

Chapter13 第13章 WebSockets 和 Socket.IO

Chapter14 第14章 Node 应用程序的测试和调试

Chapter15 第15章 安全及防护

Chapter16 扩展和部署 Node 应用

附录 Node、Git 和 GitHub