(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(t,s,e){"use strict";e.r(s);var o=e(28),n=Object(o.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#证书"}},[t._v("#")]),t._v(" 证书")]),t._v(" "),e("p",[t._v("nohost作为代理抓包服务器，如果用户希望nohost能抓包https请求，则需要用到“中间人攻击”原理。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/4689952/69628380-a3eb7280-1086-11ea-9863-cbdc4ab0be85.png",alt:"中间人"}})]),t._v(" "),e("p",[t._v("中间人截取客户端发送给服务器的请求，然后伪装成客户端与服务器进行通信；将服务器返回给客户端的内容发送给客户端，伪装成服务器与客户端进行通信。 通过这样的手段，便可以获取客户端和服务器之间通信的所有内容。 使用中间人攻击手段，必须要让客户端信任中间人的证书。")]),t._v(" "),e("p",[t._v("让客户端信任中间人的证书有2种方案：")]),t._v(" "),e("ol",[e("li",[t._v("客户端安装whistle的根证书")]),t._v(" "),e("li",[t._v("客户端不需要安装whistle的根证书，nohost服务器安装业务域名真实的证书，这样nohost服务器可以充当“真实”服务器")])]),t._v(" "),e("blockquote",[e("p",[t._v("这里的"),e("strong",[t._v("中间人")]),t._v(" 就是nohost代理。")])]),t._v(" "),e("p",[t._v("如果希望https的页面能注入"),e("strong",[t._v("环境选择小圆点")]),t._v("，也是有必要实施上面的2种方案，否则nohost代理是没法拦截页面然后在页面注入脚本的。用户体验上，第二种方案nohost代理上传证书，可以省去让用户安装whistle根证书的麻烦。")]),t._v(" "),e("p",[e("strong",[t._v("上传证书")])]),t._v(" "),e("p",[t._v("nohost管理页面提供了上传业务域名证书功能, 地址为\nhttp://imwebtest.test.com:8080/admin.html#certs")]),t._v(" "),e("blockquote",[e("p",[t._v("其中 imwebtest.test.com 表示nohost运行的域名")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/4689952/69628531-b4035200-1086-11ea-9935-7feb0cfd2df7.png",alt:"上传证书"}})]),t._v(" "),e("p",[t._v("*.crt和 *.key 文件要一一对应，每个文件内可包含多个域名，会自动识别文件内有哪些域名。")])])}),[],!1,null,null,null);s.default=n.exports}}]);