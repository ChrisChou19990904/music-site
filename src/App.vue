<template>
  <div>
    <GoogleTranslate />
    <HeaderNav />
    <h1>🎶 演奏曲目分類（融合Marimba Real、Perfect Piano，以及實體鋼琴彈奏的曲目）</h1>
    <p>我的業餘愛好是彈奏樂器，因此我的期末報告主題是整理並展示我用實體鋼琴以及Marimba Real、Perfect Piano等應用程式彈奏的多種旋律的分類，包括各類影視劇、動畫、廣告的主題曲、片尾曲、插曲等。原本規劃開發 Chrome 擴充功能，但遇到技術瓶頸，所以最後改用純前端網站實現。</p>
    <p>技術選擇上，我使用了 Vue 框架搭配 Vite 工具，讓開發更快速且有良好的組件化架構。專案分為多個元件，包括選單、影片清單、Google 翻譯、作者簡介等，方便維護與擴充。</p>
    <p>主要功能有分類下拉選單可以切換曲目，並且能直接播放影片；同時也集成 Google 翻譯，方便不同語言使用者瀏覽；頁面還有響應式設計，兼容手機與桌機。</p>
    想看更詳細的說明請點入下方連結：<br>
    <a href="https://www.notion.so/Vue-js-25ba17d2741180e68a25d0ed7097f209" target="_blank">用 Vue.js 製作一個演奏曲目分類的靜態網站</a>
    <CategorySelector :categories="categories" @categorySelected="selectCategory" />
    <VideoList :videos="videos" :selectedCategory="selectedCategory" />
    <FooterSection />
  </div>
</template>
<style>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;

}
a:visited{
  color: blue;
}
@media (max-width: 768px) {
  video{
    max-width: 100%;
  }
}
</style>
<script setup>
import { ref } from 'vue'
import GoogleTranslate from '@/components/GoogleTranslate.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import CategorySelector from '@/components/CategorySelector.vue'
import VideoList from '@/components/VideoList.vue'
import FooterSection from '@/components/FooterSection.vue'

// 這裡定義分類
const categories = [
  { id: 'Jiangshi', name: '香港殭屍片配樂' },
  { id: 'Armor_Hero', name: '鎧甲勇士配樂' },
  { id: 'Ultraman', name: '超人力霸王配樂' },
  { id: 'Super_Sentai', name: '超級戰隊配樂' },
  { id: 'Kamen_Rider', name: '假面騎士配樂' },
  { id: 'Other_Tokusatsu', name: '其他特攝配樂' },
  { id: 'Anime', name: '動畫配樂' },
  { id: 'Advertisement', name: '廣告配樂' },
  { id: 'alarm_song', name: '系統提示配樂' },
  { id: 'tiktok_music', name: '抖音神曲' },
  { id: 'game_music', name: '電玩配樂' },
  { id: 'nursery_rhyme', name: '兒歌' },
]

// 用簡化的影nn片資料，完整的你可以補充
const videos = {
  Jiangshi: [
    { title: '鬼新娘', src: '/music-site/videos/鬼新娘.mp4' },
    { title: '殭屍先生', src: '/music-site/videos/殭屍先生.mp4' },
    { title: '殭屍先生-整蠱', src: '/music-site/videos/殭屍先生-整蠱.mp4' },
    { title: '殭屍復活II', src: '/music-site/videos/殭屍復活II.mp4' },
    { title: '一眉道人', src: '/music-site/videos/一眉道人鋼琴版.mp4' },
    { title: '百鬼霧林', src: '/music-site/videos/百鬼霧林.mp4' },
  ],
  Armor_Hero: [
    { title: '光的戰役-女聲版', src: '/music-site/videos/光的戰役.mp4' },
    { title: '光的戰役', src: '/music-site/videos/光的戰役鋼琴版.mp4' },
    { title: '戰鬥通往勝利', src: '/music-site/videos/戰鬥-通往勝利.mp4' },
    { title: '查理九世', src: '/music-site/videos/查理九世鋼琴版.mp4' },
    { title: '淡淡的愛意', src: '/music-site/videos/淡淡的愛意_實體鋼琴.mp4' },
    { title: '帝皇再臨', src: '/music-site/videos/帝皇再臨A大調實體鋼琴演奏.mp4' },
    { title: '帝皇再臨-治癒版', src: '/music-site/videos/帝皇再臨實體鋼琴版.mp4' },
    { title: '不敗的英雄', src: '/music-site/videos/不敗的英雄.mp4' },
    { title: 'Just KO', src: '/music-site/videos/Just-K.O .mp4' },
  ],
  Ultraman: [
    { title: 'ウルトラマンの歌', src: '/music-site/videos/ウルトラマンの歌.mp4' },
    { title: '遊星から来た兄弟　勝利', src: '/music-site/videos/勝利.mp4' },
    { title: 'ウルトラセブンの歌', src: '/music-site/videos/ウルトラセブンの歌.mp4' },
    { title: '帰ってきたウルトラマンの歌', src: '/music-site/videos/帰ってきたウルトラマンの歌.mp4' },
    { title: 'ウルトラマンエースの歌', src: '/music-site/videos/ultraman_ace.mp4' },
    { title: 'ウルトラマンタロウの歌', src: '/music-site/videos/ウルトラマンタロウ.mp4' },
    { title: 'ウルトラマンレオの歌', src: '/music-site/videos/ultraman_leo.mp4' },
    { title: 'Take Me Higher', src: '/music-site/videos/Take Me  Higher.mp4' },
    { title: '奇蹟再現', src: '/music-site/videos/奇蹟再現鋼琴版.mp4' },
    { title: 'Love Theme from Tiga', src: '/music-site/videos/Love_Theme_From_Tiga.mp4' },
    { title: 'light of Humanity', src: '/music-site/videos/light_of_humanity.mp4' },
    { title: '光を継ぐもの', src: '/music-site/videos/光を継ぐもの.mp4' },
    { title: '君だけを守りたい', src: '/music-site/videos/君だけを守りたいーピアノ.mp4' },
    { title: 'Theme of Ultraman Gaia Fighting', src: '/music-site/videos/超人力霸王蓋亞至高戰鬥曲.mp4' },
    { title: '悲傷的沼澤', src:'/music-site/videos/悲傷的沼澤.mp4' },
    { title: 'Spirit', src: '/music-site/videos/spirit_perfectpiano.mp4' },
    { title: 'Something You Can Do', src: '/music-site/videos/Something_You_Can_Do.mp4' },
    { title: 'Eiyuu', src: '/music-site/videos/eiyuu.mp4' },
    { title: 'ウルトラマンメビウスの歌', src: '/music-site/videos/ultraman_mebius_op.mp4' },
    { title: 'ウルトラの奇跡', src: '/music-site/videos/ウルトラの奇跡.mp4' },
    { title: 'ジードの証', src: '/music-site/videos/ジードの証.mp4' },

  ],
  // 其他分類依此類推
  Super_Sentai: [
    { title: '響の調べ', src: '/music-site/videos/Hibiki_No_Shirabe.mp4' },
    { title: 'ハリケンジャー参上', src: '/music-site/videos/ハリケンジャー参上.mp4' },
    { title: '幸せShaking Hands', src: '/music-site/videos/幸せShaking_Hands.mp4' },
    { title: '影となりて悪を討つ', src: '/music-site/videos/影となりて悪をうつ.mp4' },
  ],
  Kamen_Rider: [
    { title: '仮面ライダークウガ', src: '/music-site/videos/仮面ライダークウガ.mp4' },
    { title: 'Alive A Life', src: '/music-site/videos/Alive_A_Life.mp4' },
  ],
  Other_Tokusatsu: [
    { title: 'Life Goes On', src: '/music-site/videos/life-goes-on.mp4' },
    { title: '魔弾戦記リュウケンドー', src: '/music-site/videos/madan_senki_ryukendo.mp4' },
  ],
  Anime: [
    { title: '好想大聲說喜歡你', src: '/music-site/videos/君が好きだと叫びたい.mp4' },
    { title: '穿越時空的思念', src: '/music-site/videos/穿越時空的思念降B大調實體鋼琴演奏.mp4' },
    { title: '哀歌', src: '/music-site/videos/elegy.mp4' },
    { title: '幻化成風', src: '/music-site/videos/幻化成風.mp4' },
  ],
  Advertisement: [
    { title: '感冒用斯斯', src: '/music-site/videos/感冒用斯斯.mp4' },
    { title: '益可膚', src: '/music-site/videos/益可膚.mp4' },
    { title: '綠油精', src: '/music-site/videos/綠油精.mp4' },
  ],
  alarm_song: [
    { title: '收酒矸', src: '/music-site/videos/資源回收車音樂.mp4' },
    { title: '三星Galaxy 鈴聲 - 歸來', src: '/music-site/videos/homecoming.mp4' },
    { title: '中華民國軍樂-下課號', src: '/music-site/videos/中華民國軍樂_下課號.mp4' },
    { title: '全家便利商店新鈴聲', src: '/music-site/videos/全家便利商店新鈴聲.mp4' },
  ],
  tiktok_music: [
    { title: 'River Flows In You', src: '/music-site/videos/River_Flows_In_You.mp4' },
    { title: 'Way Back Home', src: '/music-site/videos/way_back_home.mp4' },
    { title: '一笑江湖', src: '/music-site/videos/一笑江湖.mp4' },
  ],
  game_music: [
    { title: '夜幕下的旅途', src: '/music-site/videos/夜幕下的旅途.mp4' },
  ],
  nursery_rhyme: [
    { title: '我愛鄉村', src: '/music-site/videos/我愛鄉村.mp4' },
  ],
}

const selectedCategory = ref('')

function selectCategory(category) {
  selectedCategory.value = category
}
</script>

