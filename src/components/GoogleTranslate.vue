<template>
  <div id="google-translate-box">
    <div id="google_translate_element"></div>
    <p>點擊上方的語言選單以切換語言</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'zh-TW',
      includedLanguages: 'en,es,fr,de,it,zh-CN,ja,ko,th,vi,my,id,ms,ar,he,ru,tg,uk,hi,tr,pt,nl,is,fi,sv,no,ro,kk,bo,mn,la,fil,tl,el',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    }, 'google_translate_element')
  }

  const script = document.createElement('script')
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.head.appendChild(script)
})
</script>
