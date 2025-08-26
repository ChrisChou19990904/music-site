<template>
  <section>
    <p v-if="selectedCategory && videos[selectedCategory]?.length">
      🎧 以下是 "{{ categoryName }}" 分類的曲目：
    </p>
    <div v-else>
      <p>請選擇分類以查看曲目。</p>
    </div>
    <ol v-if="selectedCategory && videos[selectedCategory]?.length">
      <li v-for="video in videos[selectedCategory]" :key="video.src">
        <strong>{{ video.title }}</strong><br />
        <video controls :src="video.src" style="max-width: 600px; width: 100%;"></video>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  videos: Object,
  selectedCategory: String,
})

const categoryName = computed(() => {
  if (!props.selectedCategory) return ''
  // 你可以從 props.videos 裡取名字，但目前簡單取ID
  return props.selectedCategory.replace(/_/g, ' ')
})
</script>
