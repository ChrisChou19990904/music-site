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
  ],
  Armor_Hero: [
    { title: '光的戰役-女聲版', src: '/videos/光的戰役.mp4' },
    { title: '光的戰役', src: '/videos/光的戰役鋼琴版.mp4' },
  ],
  Ultraman: [
    { title: 'ウルトラマンの歌', src: 'assets/videos/ウルトラマンの歌.mp4' },
  ],
  // 其他分類依此類推
}

const selectedCategory = ref('')

function selectCategory(category) {
  selectedCategory.value = category
}
</script>

