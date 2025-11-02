<template>
  <footer style="text-align: center; background-color: purple; color: yellow; font-size: 50px;">
    作者：<a href="https://www.facebook.com/profile.php?id=100056441813114&locale=zh_TW" target="_blank" style="color:white;">周彥廷</a>
    <br />
    創作日期：西元二零二五年八月二十六日
    <br />
    <img width="540" height="720" src="/src/components/my_appearance2.jpg" alt="自拍" />
  </footer>
</template>
<style scoped>
footer {
  text-align: center;
  background-color: purple;
  color: yellow;
  font-size: 50px;
  padding: 20px;
}

a{
  color: white;
  text-decoration: none;
}
a :hover{
  text-decoration: underline;
}
a :visited{
  color: white;
}

img {
  width: 540px;
  height: 720px;
  margin-top: 20px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  footer {
    font-size: 30px; /* 螢幕小時，字體變小 */
  }

  img {
    max-width: 100% /* 小螢幕時縮小圖片 */
  }

  p {
    font-size: 18px; /* 小螢幕時調整段落字體大小 */
  }
}

@media (max-width: 480px) {
  footer {
    font-size: 20px; /* 更小螢幕再縮小字體 */
  }

  img {
    width: 250px;
    height: 350px; /* 小螢幕下圖片再次縮小 */
  }

  p {
    font-size: 16px; /* 更小螢幕的文字調整 */
  }
}
</style>