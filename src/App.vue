<template>
  <div id="app">
    <router-view :personalData="personalData" v-model="personalData">
    </router-view>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import queryString from "query-string";
import axios from "axios";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      personalData: {
        stuNo: "1234567890", // 学号
        stuName: "弗拉基米尔", // 姓名
        stuPosition: "俄罗斯莫斯科/克林姆林宫", // 学生书院/班级
        stuDegree: "本科生", // 学生学位
        reportDate: "2020-05-01", // 学生报道日期
        reportTime: "11:45:14", // 学生报道时间
        outTimeFrom: "00:00", // 外出时间
        outTimeTo: "23:59", // 入校时间
        photoURL: "/default.jpg", // 学生照片
        photoBorderWidth: 8,
        qrCode: "", // 生成的二维码
        generateColorOfCode: "紫码",
      },
      timingInterval: null,
    };
  },
  methods: {
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
    async getDefaultProfilePhoto() {
      try {
        let resp = await axios.get(
          "/staticFile/image/people/" + this.personalData.stuNo + ".jpg",
          {
            crossdomain: true,
            responseType: "arraybuffer",
          }
        );
        return (
          "data:image/png;base64," +
          btoa(
            new Uint8Array(resp.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )
        );
      } catch (e) {
        return this.personalData.photoURL;
      }
    },
    async getInformationFromUrl() {
      // 从URL获取信息
      const URL = document.URL;
      this.personalData.qrCode =
        queryString.parseUrl(URL).query.qrCode || this.generateCode();
      this.personalData.stuNo =
        queryString.parseUrl(URL).query.stuNo || this.personalData.stuNo;
      this.personalData.stuName =
        queryString.parseUrl(URL).query.stuName || this.personalData.stuName;
      this.personalData.stuPosition =
        queryString.parseUrl(URL).query.stuPosition ||
        this.personalData.stuPosition;
      this.personalData.stuDegree =
        queryString.parseUrl(URL).query.stuDegree ||
        this.personalData.stuDegree;
      this.personalData.reportDate =
        queryString.parseUrl(URL).query.reportDate ||
        this.personalData.reportDate;
      this.personalData.reportTime =
        queryString.parseUrl(URL).query.reportTime ||
        this.personalData.reportTime;
      this.personalData.outTimeFrom =
        queryString.parseUrl(URL).query.outTimeFrom ||
        this.personalData.outTimeFrom;
      this.personalData.outTimeTo =
        queryString.parseUrl(URL).query.outTimeTo ||
        this.personalData.outTimeTo;
      this.personalData.photoURL =
        queryString.parseUrl(URL).query.photoUrl ||
        localStorage.getItem("photoURL") ||
        (await this.getDefaultProfilePhoto());
      this.personalData.generateColorOfCode =
        queryString.parseUrl(URL).query.generateColorOfCode ||
        this.personalData.generateColorOfCode;
      this.personalData.photoBorderWidth =
        queryString.parseUrl(URL).query.photoBorderWidth ||
        this.personalData.photoBorderWidth;
    },
    getPersonalDataFromCache() {
      // 从缓存读取数据
      this.personalData.qrCode =
        localStorage.getItem("qrCode") || this.personalData.qrCode;
      this.personalData.stuNo =
        localStorage.getItem("stuNo") || this.personalData.stuNo;
      this.personalData.stuName =
        localStorage.getItem("stuName") || this.personalData.stuName;
      this.personalData.stuPosition =
        localStorage.getItem("stuPosition") || this.personalData.stuPosition;
      this.personalData.stuDegree =
        localStorage.getItem("stuDegree") || this.personalData.stuDegree;
      this.personalData.reportDate =
        localStorage.getItem("reportDate") || this.personalData.reportDate;
      this.personalData.reportTime =
        localStorage.getItem("reportTime") || this.personalData.reportTime;
      this.personalData.outTimeFrom =
        localStorage.getItem("outTimeFrom") || this.personalData.outTimeFrom;
      this.personalData.outTimeTo =
        localStorage.getItem("outTimeTo") || this.personalData.outTimeTo;
      this.personalData.photoURL =
        localStorage.getItem("photoUrl") || this.personalData.photoURL;
      this.personalData.generateColorOfCode =
        localStorage.getItem("generateColorOfCode") ||
        this.personalData.generateColorOfCode;
      this.personalData.photoBorderWidth =
        localStorage.getItem("photoBorderWidth") ||
        this.personalData.photoBorderWidth;
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
  },

  async mounted() {
    this.getPersonalDataFromCache();
    await this.getInformationFromUrl();
    if (!localStorage.getItem("logined")) {
      alert(
        '1. 本系统仅供学习交流使用, 切勿做实际用途, 否则后果自负! \n2. 目前系统已经改版, 请点击"返校申请"进行数据修改!'
      );
      localStorage.setItem("logined", true);
    }
  },
};
</script>

<style>
body {
  width: 100%;
  overflow-x: hidden;
  background-color: rgb(249, 249, 249);
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  min-height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.green {
  margin: 0px 5px;
  color: rgb(254, 192, 98);
}
.undergraduateBackground {
  background-color: #1671f0;
}

.graduateBackground {
  background-color: #7547c0;
}

.overseaBackground {
  background-color: #353a73;
}
</style>
