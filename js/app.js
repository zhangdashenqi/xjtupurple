let app = new Vue({
  el: "#app",
  components: {
    VueSlider: window["vue-slider-component"],
  },
  data: {
    stuNo: "1234567890", // 学号
    stuName: "弗拉基米尔", // 姓名
    stuPosition: "俄罗斯莫斯科/克林姆林宫", // 学生书院/班级
    stuDegree: "本科生", // 学生学位
    reportDate: "2020-05-01", // 学生报道日期
    reportTime: "11:45:14", // 学生报道时间
    outTimeFrom: "00:00", // 外出时间
    outTimeTo: "23:59", // 入校时间
    photoURL: "img/default.jpg", // 学生照片
    photoBorderWidth: 8,
    qrCode: "", // 生成的二维码
    generateColorOfCode: "紫码",
    today: "",
    nowDate: "",
    nowTime: "",
    timingInterval: null,
  },
  computed: {
    isUndergraduate: function () {
      return this.stuDegree === "本科生";
    },
    isGraduate: function () {
      return this.stuDegree === "研究生";
    },
    isOversea: function () {
      return this.stuDegree === "留学生";
    },
    colorOfCode: function () {
      switch (this.generateColorOfCode) {
        case "紫码":
          return "#F97AFB";
        case "绿码":
          return "#2BAA66";
        default:
          return "#F97AFB";
      }
    },
    isPurple: function () {
      return this.generateColorOfCode === "紫码";
    },
    computedURL: function () {
      return (
        "http://xjtupurple.codes/?stu_no=" +
        this.stuNo +
        "&stu_name=" +
        this.stuName +
        "&stu_position=" +
        this.stuPosition +
        "&stu_degree=" +
        this.stuDegree +
        "&report_date=" +
        this.reportDate +
        "&report_time=" +
        this.reportTime +
        "&out_time_from=" +
        this.outTimeFrom +
        "&out_time_to=" +
        this.outTimeTo +
        "&qr_code=" +
        this.qrCode +
        "&generate_color_of_code=" +
        this.generateColorOfCode
      );
      "&photo_border_width" + this.photoBorderWidth;
    },
  },
  created: async function () {
    this.timingInterval = this.timer();
    await this.getTimeData();
    await this.getPersonalDataFromCache();
    await this.getInformationFromUrl(); //默认优先读取URL中的信息, 将缓存信息覆盖
    if (!localStorage.getItem("reminded")) {
      alert(
        "由于美国总统唐纳德·特朗普确诊了该病毒, 为防止新型冠状病毒(COVID-19)通过网络传播(误), 将默认的头像和名字改为俄罗斯总统弗拉基米尔·普京的相关信息😀"
      );
      localStorage.setItem("reminded", "true");
    }
  },

  methods: {
    writeInfoToCache() {
      // 将数据写入缓存
      /**
       * @deprecated
       * */
      localStorage.setItem("stu_no", this.stuNo);
      localStorage.setItem("stu_name", this.stuName);
      localStorage.setItem("stu_position", this.stuPosition);
      localStorage.setItem("stu_degree", this.stuDegree);
      localStorage.setItem("report_date", this.reportDate);
      localStorage.setItem("report_time", this.reportTime);
      localStorage.setItem("out_time_from", this.outTimeFrom);
      localStorage.setItem("out_time_to", this.outTimeTo);
      localStorage.setItem("qr_code", this.qrCode);
      localStorage.setItem("photo_url", this.photoURL);
      localStorage.setItem("generate_color_of_code", this.generateColorOfCode);
      localStorage.setItem("photo_border_width", this.photoBorderWidth);
      alert("保存成功!");
    },
    getQueryVariable(variable) {
      //查询URL信息
      let query = window.location.search.substring(1);
      let vars = query.split("&");
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable) {
          return decodeURI(pair[1]);
        }
      }
      return false;
    },
    getInformationFromUrl() {
      // 从URL获取信息
      this.qrCode = this.getQueryVariable("qr_code") || this.generateCode();
      this.stuNo = this.getQueryVariable("stu_no") || this.stuNo;
      this.stuName = this.getQueryVariable("stu_name") || this.stuName;
      this.stuPosition =
        this.getQueryVariable("stu_position") || this.stuPosition;
      this.stuDegree = this.getQueryVariable("stu_degree") || this.stuDegree;
      this.reportDate = this.getQueryVariable("report_date") || this.reportDate;
      this.reportTime = this.getQueryVariable("report_time") || this.reportTime;
      this.outTimeFrom =
        this.getQueryVariable("out_time_from") || this.outTimeFrom;
      this.outTimeTo = this.getQueryVariable("out_time_to") || this.outTimeTo;
      this.photoURL =
        this.getQueryVariable("photo_url") ||
        "http://hello.xjtu.edu.cn/staticFile/image/people/" +
          this.stuNo +
          ".jpg";
      this.generateColorOfCode =
        this.getQueryVariable("generate_color_of_code") ||
        this.generateColorOfCode;
      this.photoBorderWidth =
        this.getQueryVariable("photoBorderWidth") || this.photoBorderWidth;
    },
    getPersonalDataFromCache() {
      // 从缓存读取数据
      this.qrCode = localStorage.getItem("qr_code") || this.qrCode;
      this.stuNo = localStorage.getItem("stu_no") || this.stuNo;
      this.stuName = localStorage.getItem("stu_name") || this.stuName;
      this.stuPosition =
        localStorage.getItem("stu_position") || this.stuPosition;
      this.stuDegree = localStorage.getItem("stu_degree") || this.stuDegree;
      this.reportDate = localStorage.getItem("report_date") || this.reportDate;
      this.reportTime = localStorage.getItem("report_time") || this.reportTime;
      this.outTimeFrom =
        localStorage.getItem("out_time_from") || this.outTimeFrom;
      this.outTimeTo = localStorage.getItem("out_time_to") || this.outTimeTo;
      this.photoURL = localStorage.getItem("photo_url") || this.photoURL;
      this.generateColorOfCode =
        localStorage.getItem("generate_color_of_code") ||
        this.generateColorOfCode;
      this.photoBorderWidth =
        localStorage.getItem("photo_border_width") || this.photoBorderWidth;
    },
    getTimeData() {
      // 获取时间并格式化
      let aDate = new Date();
      this.nowDate =
        (aDate.getMonth() + 1 <= 9
          ? "0" + (aDate.getMonth() + 1)
          : aDate.getMonth() + 1) +
        "月" +
        (aDate.getDate() <= 9 ? "0" + aDate.getDate() : aDate.getDate()) +
        "日";
      this.nowTime =
        (aDate.getHours() <= 9 ? "0" + aDate.getHours() : aDate.getHours()) +
        ":" +
        (aDate.getMinutes() <= 9
          ? "0" + aDate.getMinutes()
          : aDate.getMinutes()) +
        ":" +
        (aDate.getSeconds() <= 9
          ? "0" + aDate.getSeconds()
          : aDate.getSeconds());
      this.today =
        aDate.getFullYear() +
        "-" +
        (aDate.getMonth() + 1 <= 9
          ? "0" + (aDate.getMonth() + 1)
          : aDate.getMonth() + 1) +
        "-" +
        (aDate.getDate() <= 9 ? "0" + aDate.getDate() : aDate.getDate());
    },
    timer() {
      // 实时更新时间, 重制时钟间隔
      return setInterval(() => {
        this.getTimeData();
      }, 100);
    },
    generateCode() {
      // 生成随机二维码数据
      let seq = "";
      const hexSeq = "0123456789ABCDEF";
      for (let index = 0; index < 32; index++) {
        seq += "" + hexSeq[Math.floor(Math.random() * 16)];
      }
      return seq;
    },
    changeImage() {
      // 更换图片
      const reader = new FileReader();
      const file = document.getElementById("imageUploadInput").files[0];
      reader.readAsDataURL(file);
      const that = this;
      reader.addEventListener(
        "load",
        function () {
          that.photoURL = reader.result;
        },
        false
      );
    },
  },
  destroyed: function () {
    // 清除计时器间隔
    clearInterval(timingInterval);
  },
});
