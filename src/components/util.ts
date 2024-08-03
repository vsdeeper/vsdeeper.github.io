import { LANG_DATA } from '@/assets/lang'

const lang = navigator.language
const langKey: keyof typeof LANG_DATA = lang === 'zh-CN' ? 'zh' : 'en'
const currentLangData = LANG_DATA[langKey]

export function getLangData(key: string) {
  const keyArr = key.split('.')
  return getNestedValue(currentLangData, keyArr)
}

function getNestedValue(obj: Record<string, any>, path: string[]) {
  if (path.length === 0) {
    return obj // 如果路径为空，返回整个对象
  }
  const key = path.shift() // 获取路径的第一个key
  if (obj[key!]) {
    // 确保key在对象中存在
    if (path.length === 0) {
      return obj[key!] // 如果已到达路径末端，返回key的值
    }
    if (typeof obj[key!] === 'object') {
      return getNestedValue(obj[key!], path.slice()) // 如果key的值是对象，递归调用
    }
  }
  return undefined // 如果key不存在或值不是对象，返回undefined
}
