export function API_HOST(val) {
  switch (val) {
    case 1:
      return 'https://api.douban.com'
      break
    case 2:
      return 'https://tj.nineton.cn'
      break
    default:
      return 'https://api-m.mtime.cn'
  }
}
