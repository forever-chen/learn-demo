* sessionStorage 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）
* localStorage 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。
* storage是 HTML5 标准中新加入的技术，存储一般为5M
* 通过storage.setItem('aa','bb')设置值；
* 通过storage.getItem('aa')获取值
* storage.length可以判断storage对象是否为空
* Storage.removeItem() 接受一个参数——你想要移除的数据项的键，然后会将对应的数据项从域名对应的存储对象中移除。
* Storage.clear() 不接受参数，只是简单地清空域名对应的整个存储对象。
* 浏览器支持，ie8以上的浏览器都支持
* cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。
* cookie 确实非常小，它的大小限制为4KB左右，是网景公司的前雇员 Lou Montulli 在1993年3月的发明。它的主要用途有保存登录信息，默认是关闭浏览器失效。
* cookie的每次http请求都会带着，所以数据过大会增加服务器压力
* Cookie具有不可跨域名性
* Cookie的maxAge决定着Cookie的有效期，单位为秒（Second）。Cookie中通过getMaxAge()方法与setMaxAge(int maxAge)方法来读写maxAge属性。
* cookie.setMaxAge(Integer.MAX_VALUE);           // 设置生命周期为MAX_VALUE
* Cookie默认的maxAge值为–1。如果maxAge为0，则表示删除该Cookie。
* Cookie并不提供修改、删除操作。如果要修改某个Cookie，只需要新建一个同名的Cookie，添加到response中覆盖原来的Cookie。如果要删除某个Cookie，只需要新建一个同名的Cookie，并将maxAge设置为0，并添加到response中覆盖原来的Cookie。
* 不同的域名下cookie是不能访问的，但是可以通过设置cookie访问域名来设置访问权限
* Cookie是保存在浏览器端的，因此浏览器具有操作Cookie的先决条件。
* cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗考虑到安全应当使用session。
* session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用COOKIE。
* JavaScript是运行在客户端的脚本，因此一般是不能够设置Session的，因为Session是运行在服务器端的。而cookie是运行在客户端的，所以可以用JS来设置cookie. 
###### cookie中涉及的知识
* 中文与英文字符不同，中文属于Unicode字符，在内存中占4个字符，而英文属于ASCII字符，内存中只占2个字节。Cookie中使用Unicode字符时需要对Unicode字符进行编码，否则会乱码。
* Cookie不仅可以使用ASCII字符与Unicode字符，还可以使用二进制数据。例如在Cookie中使用数字证书，提供安全度。使用二进制数据时也需要进行编码。(可以用在数字证书)，如果值为二进制数据，则需要使用BASE64编码
* 静态内容的请求是无coockie的请求。
########### 保存登录信息的方法：
* 最直接的是把用户名与密码都保持到Cookie中，下次访问时检查Cookie中的用户名与密码，与数据库比较。这是一种比较危险的选择，一般不把密码等重要信息保存到Cookie中。
* 一种方案是把密码加密后保存到Cookie中，下次访问时解密并与数据库比较。这种方案略微安全一些。如果不希望保存密码，还可以把登录的时间戳保存到Cookie与数据库中，到时只验证用户名与登录时间戳就可以了。
* 本例将采用另一种方案，只在登录时查询一次数据库，以后访问验证登录信息时不再查询数据库。实现方式是把账号按照一定的规则加密后，连同账号一块保存到Cookie中。下次访问时只需要判断账号的加密规则是否正确即可。
* 由于MD1算法的不可逆性，即使用户知道了账号与加密后的字符串，也不可能解密得到密钥。因此，只要保管好密钥与算法，该机制就是安全的。
