# xjtupurple

> ### 原网址已经转移到[https://xjtupurple.codes](https://xjtupurple.codes)!
> #### 若微信无法打开, 可以移步至[http://remote.endaytrer.io](http://remote.endaytrer.io)

### 为了没有紫码的你们更方便的出狱

> 点击下方的 "交大校园码" 即可更改名字、学号等属性。
> 
> 本网站尊重用户隐私，所有数据都不会上传
> 
> **本网站仅供技术练习与交流，切勿实际使用，否则后果自负** 

### 8.14 更新: 通过URL在多个设备访问相同信息, 并且可以根据信息生成对应的URL
**感谢@zhang570221322提供的想法和代码实现!**

现在可以通过将固定的URL发送给另一台设备作为访问同一个人信息的方法. 同时在菜单最下面一栏给出信息对应的URL以便复制和多平台使用.

例如, 输入网址https://xjtupurple.codes/?stu_name=张三&stu_position=foo书院/bar班&stu_degree=本科生 即可获得姓名为张三, 书院和班级为foo书院/bar班, 学位为本科生的信息. 其他信息为默认的(学号为1234567890, 报到日期为2020.5.1, 照片为美国总统官方照等). 这些信息可以在交大校园码菜单中保存到缓存, 方便下次调用.
具体方法:
1. 输入https://xjtupurple.codes/?
2. 选择任意一个想要改变/新增的值, 输入到上述地址的后面:
   - 若想改变/新增姓名: 输入"stu_name="
   - 若想改变/新增学号: 输入"stu_no="
   - 若想改变/新增书院和班级: 输入"stu_position="
   - 若想改变/新增学位: 输入"stu_degree="
   - 若想改变/新增报到日期: 输入"report_date="
   - 若想改变/新增报到时间: 输入"report_time="
   - 若想改变/新增外出时间: 输入"out_time_from="
   - 若想改变/新增返校时间: 输入"out_time_to="
   - 若想改变/新增照片URL: 输入"photo_url="
   - 若想改变/新增生成码颜色: 输入"generate_color_of_code="
3. 输入该条目的信息, 例如"张三"
4. 若想改变另一个值, 输入"&", 然后回到第2步;  
   若不想, 访问该URL, 流程结束.

当然, 你也可以复制交大校园码菜单中最后一栏, 直接获取当前信息的URL. 照片无法被保存, 还需要手动添加哦.

### 7.3 更新: bug修复和二维码颜色选择:
1. 修复了二维码上方横幅不随学位颜色变化而变化的bug. 注意: 由于改变了显示策略, 有些浏览器可能不会正常显示斜角部分.
2. 二维码现在随改动实时更新.
3. 现在可以选择二维码的颜色(绿码和紫码)

### 6.27 更新: 最上面一栏的颜色随学位改变
1. 现在学位的选项是下拉框, 有"本科生" "研究生" "留学生"供选择.
2. 最上面一栏的颜色随学位改变.

### 6.25 更新: 自定义紫码和存储到缓存
1. 修复了二维码学位后背景图片无法加载的bug
2. 现在您的信息和照片可以存储到缓存中! 点击"交大校园码", 最下面新增按钮"将信息保存到缓存", 即可免去信息重新录入的繁琐工作, 打开相同的浏览器(或者微信, 确保不再隐私模式)即可使用. 根据隐私的原则, 这些数据仅会保留在用户浏览器的缓存中, 若用户清除了缓存, 这些数据将不会存在.
3. 现在默认的紫码是随机生成的, 而且您可以使用您自己获取到的校园码二维码文字进行生成可被机器识别的紫码. 这项数据可以在"交大校园码"里更改.

### 如何使用
1. 打开微信;
2. 将这个网址[https://xjtupurple.codes](https://xjtupurple.codes)发送给一个人;
3. 点击发送出去的链接;
4. 点击"交大校园码";
5. 将内容修改为自己的信息;
6. 上传照片;
7. 越狱!(bushi)

### 效果：
![effect](img/effect.jpg)

### 完成的内容
- [x] 外观模拟
- [x] 时间实时变换
- [x] 个人信息更改
- [x] 随机紫码生成
- [x] 绿码
- [x] 信息和照片储存在缓存中
- [x] 通过分享URL进行多平台同步

### 未完成的内容
- [ ] 底部菜单栏按钮的实装
- [ ] 爬取自动生成可被机器识别的紫码

### 问题
- 紫码边缘显示效果差
- 报到登记更改后无法精确到秒
- 外出时间没有不合法性识别

Powered by Github Pages, Nginx, jQuery, Vue.js & QRCode.js.

Made by Endaytrer.
