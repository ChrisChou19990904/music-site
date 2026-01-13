<template>
  <div class="post-container">
    <!-- ✅ Facebook 外掛留言區 -->
    <div
        class="fb-comments"
        :data-href="currentUrl"
        data-width="100%"
        data-numposts="5"
        data-order-by="social"
    ></div>

    <!-- ✅ 分享按鈕 -->
    <div id="social-share">
      <a :href="fbShareUrl" target="_blank" class="fb-link">分享到 Facebook</a>
      <span> | </span>
      <a :href="lineShareUrl" target="_blank" class="line-link">分享到 LINE</a>
      <span> | </span>
      <a :href="twitterShareUrl" target="_blank" class="x-link">分享到 X</a>
    </div>

    <!-- ✅ 作者資訊 -->
    <footer>
      作者：
      <a
          href="https://www.facebook.com/profile.php?id=100056441813114&locale=zh_TW"
          target="_blank"
      >
        周彥廷
      </a>
      <br />
      創作日期：2025/08/26
      <br />
      最近更新日期：2026/01/13
      <br />
      <img src="/src/components/my_appearance2.jpg" alt="自拍" />
    </footer>
  </div>

</template>

<script>
export default {
  name: "FacebookPost",
  data() {
    return {
      currentUrl: window.location.href,
    };
  },
  computed: {
    // ✅ 三個分享網址
    fbShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          this.currentUrl
      )}`;
    },
    lineShareUrl() {
      return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
          this.currentUrl
      )}`;
    },
    twitterShareUrl() {
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          this.currentUrl
      )}&text=你的文章標題`;
    },
  },
  mounted() {
    this.loadFacebookSDK();
  },
  methods: {
    loadFacebookSDK() {
      if (window.FB) {
        this.parseFacebook();
        return;
      }

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "YOUR_FB_APP_ID", // ← 建議填自己的 App ID
          xfbml: true,
          version: "v17.0",
        });
      };

      const scriptId = "facebook-jssdk";
      if (!document.getElementById(scriptId)) {
        const js = document.createElement("script");
        js.id = scriptId;
        js.src = "https://connect.facebook.net/zh_TW/sdk.js";
        js.async = true;
        js.defer = true;
        document.body.appendChild(js);
      }
    },
    parseFacebook() {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    },
  },
};
</script>

<style scoped>
.post-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-family: "微軟正黑體", sans-serif;
}

#social-share {
  margin-top: 20px;
}

#social-share a {
  text-decoration: none;
  font-weight: bold;
}

#social-share span {
  margin: 0 5px;
}

.fb-link {
  color: #4267b2;
}
.line-link {
  color: #00c300;
}
.x-link {
  color: #1da1f2;
}

#social-share a:hover {
  text-decoration: underline;
}

footer {
  background-color: purple;
  color: yellow;
  font-size: 30px;
  padding: 20px;
  margin-top: 30px;
}

footer a {
  color: white;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}

img {
  width: 540px;
  height: 720px;
  margin-top: 20px;
  border-radius: 10px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  footer {
    font-size: 22px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>