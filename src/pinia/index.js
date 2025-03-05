import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePinia = defineStore('pinia', () => {
  // state
  const openedTabs = ref(['模型库']) // 打开的tabs
  const currentTab = ref('modelLib') // 当前tab
  const modelTags = ref([]) // 模型标签
  const currentModelTag = ref(-1) // 当前模型标签
  const modelList = ref([]) // 分页查询模型结果
  const currentPage = ref(1) // 当前页索引
  const pageSize = ref(10) // 每页数量
  const pageTotal = ref(null) // 总量
  const showUploadModel = ref(false) // 展示上传模型页面
  const showPreview = ref(false) // 展示预览模型页面
  const currentPreview = ref('') // 当前预览模型路径
  const currentPreviewName = ref('') // 当前预览模型名称
  // getters
  const currentModelTagName = computed(() => {
    const currModelTag = modelTags.value.find((item) => item.id === currentModelTag.value)
    return currModelTag.name
  })

  // actions
  const selectModelTag = (type) => {
    currentModelTag.value = type
  }

  return { openedTabs, currentTab, modelTags, currentModelTag, selectModelTag, modelList, currentPage, pageSize, pageTotal, currentModelTagName, showUploadModel, showPreview, currentPreview, currentPreviewName }
})
