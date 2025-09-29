<template>
  <div class="category-dropdown">
    <label for="categorySelect">選擇分類：</label>
    <select id="categorySelect" @change="onChange" :value="selected">
      <option value="">請選擇分類</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'

const props = defineProps({
  categories: Array,
  selected: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['categorySelected'])

function onChange(event) {
  emit('categorySelected', event.target.value)
}
</script>

<style scoped>
.category-dropdown {
  margin-bottom: 20px;
}
select {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
