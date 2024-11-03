export function getLink(arr) {
  if (!arr) return '/'
  if (arr[0]?.link) {
    return arr[0].link
  }
  return getLink(arr.items || arr[0])
}
