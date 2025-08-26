<template>
  <div>
    <GoogleTranslate />
    <HeaderNav />
    <h1>🎶 演奏曲目分類（融合Marimba Real、Perfect Piano，以及實體鋼琴彈奏的曲目）</h1>
    <CategorySelector :categories="categories" @categorySelected="selectCategory" />
    <VideoList :videos="videos" :selectedCategory="selectedCategory" />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import HeaderNav from './components/HeaderNav.vue'
import CategorySelector from './components/CategorySelector.vue'
import VideoList from './components/VideoList.vue'
import FooterSection from './components/FooterSection.vue'

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
]

// 用簡化的影片資料，完整的你可以補充
const videos = {
  Jiangshi: [
    { title: '鬼新娘', src: '/videos/鬼新娘.mp4' },
    { title: '殭屍先生', src: '/videos/殭屍先生.mp4' },
    { title: '殭屍先生-整蠱', src: '/videos/殭屍先生-整蠱.mp4' },
    { title: '殭屍復活II', src: '/videos/殭屍復活II.mp4' },
    { title: '一眉道人', src: '/videos/一眉道人鋼琴版.mp4' },
    { title: '百鬼霧林', src: '/videos/百鬼霧林.mp4' },
  ],
  Armor_Hero: [
    { title: '光的戰役-女聲版', src: '/videos/光的戰役.mp4' },
    { title: '光的戰役', src: '/videos/光的戰役鋼琴版.mp4' },
    { title: '戰鬥通往勝利', src: '/videos/戰鬥-通往勝利-鋼琴版.mp4' },
    { title: '查理九世', src: '/videos/查理九世鋼琴版.mp4' },
    { title: '淡淡的愛意', src: '/videos/淡淡的愛意_實體鋼琴.mp4' },
    { title: '帝皇再臨', src: '/videos/帝皇再臨鋼琴版.mp4' },
    { title: '帝皇再臨-治癒版', src: '/videos/帝皇再臨實體鋼琴版.mp4' },
    { title: '不敗的英雄', src: '/videos/不敗的英雄.mp4' },
    { title: 'Just KO', src: '/videos/Just K.O .mp4' },
  ],
  Ultraman: [
    { title: 'ウルトラマンの歌', src: '/videos/ウルトラマンの歌.mp4' },
    { title: '遊星から来た兄弟　勝利', src: '/videos/勝利.mp4' },
    { title: 'ウルトラセブンの歌', src: '/videos/ウルトラセブンの歌.mp4' },
    { title: '帰ってきたウルトラマンの歌', src: '/videos/帰ってきたウルトラマンの歌.mp4' },
    { title: 'ウルトラマンエースの歌', src: '/videos/ultraman_ace.mp4' },
    { title: 'ウルトラマンタロウの歌', src: '/videos/ウルトラマンタロウ.mp4' },
    { title: 'ウルトラマンレオの歌', src: '/videos/ウルトラマンレオの歌.mp4' },
    { title: 'Take Me Higher', src: '/videos/Take Me Higher.mp4' },
    { title: '奇蹟再現', src: '/videos/奇蹟再現鋼琴版.mp4' },
    { title: 'Love Theme from Tiga', src: '/videos/Love_Theme_From_Tiga.mp4' },
    { title: 'light of Humanity', src: '/videos/light_of_humanity.mp4' },
    { title: '光を継ぐもの', src: '/videos/光を継ぐもの.mp4' },
    { title: '君だけを守りたい', src: '/videos/君だけを守りたいーピアノ.mp4' },
    { title: 'Theme of Ultraman Gaia Fighting', src: '/videos/超人力霸王蓋亞至高戰鬥曲.mp4' },
    { title: 'Spirit', src: '/videos/spirit_perfectpiano.mp4' },
    { title: 'Something You Can Do', src: '/videos/Something_You_Can_Do.mp4' },
    { title: 'Eiyuu', src: '/videos/eiyuu.mp4' },
    { title: 'ウルトラマンメビウスの歌', src: '/videos/ultraman_mebius_op.mp4' },
    { title: 'ジードの証', src: '/videos/ジードの証.mp4' },

  ],
  // 其他分類依此類推
  Super_Sentai: [
    { title: '響の調べ', src: '/videos/Hibiki_No_Shirabe.mp4' },
    { title: 'ハリケンジャー参上', src: '/videos/ハリケンジャー参上.mp4' },
    { title: '幸せShaking Hands', src: '/videos/幸せShaking_Hands.mp4' },
    { title: '影となりて悪を討つ', src: '/videos/影となりて悪をうつ.mp4' },
  ],
  Kamen_Rider: [
    { title: '仮面ライダークウガ', src: '/videos/仮面ライダークウガ.mp4' },
    { title: 'Alive A Life', src: '/videos/Alive_A_Life.mp4' },
  ],
  Other_Tokusatsu: [
    { title: 'Life Goes On', src: '/videos/life-goes-on.mp4' },
    { title: '魔弾戦記リュウケンドー', src: '/videos/ryukendo_piano.mp4' },
  ],
  Anime: [
    { title: '好想大聲說喜歡你', src: '/videos/君が好きだと叫びたい.mp4' },
    { title: '穿越時空的思念', src: '/videos/穿越時空的思念.mp4' },
    { title: '幻化成風', src: '/videos/幻化成風.mp4' },
  ],
  Advertisement: [
    { title: '感冒用斯斯', src: '/videos/感冒用斯斯.mp4' },
    { title: '益可膚', src: '/videos/益可膚.mp4' },
    { title: '綠油精', src: '/videos/綠油精.mp4' },
  ],
  alarm_song: [
    { title: '收酒矸', src: '/videos/資源回收車音樂.mp4' },
    { title: '三星Galaxy 鈴聲 - 歸來', src: '/videos/samsung_galaxy_alarm_homecoming.mp4' },
    { title: '中華民國軍樂-下課號', src: '/videos/中華民國軍樂_下課號.mp4' },
    { title: '全家便利商店新鈴聲', src: '/videos/全家便利商店新鈴聲.mp4' },
  ],
  tiktok_music: [
    { title: 'River Flows In You', src: '/videos/River_Flows_In_You.mp4' },
    { title: '一笑江湖', src: '/videos/一笑江湖.mp4' },
  ],
  game_music: [
    { title: '夜幕下的旅途', src: '/videos/夜幕下的旅途.mp4' },
  ],
}

const selectedCategory = ref('')

function selectCategory(category) {
  selectedCategory.value = category
}
</script>

