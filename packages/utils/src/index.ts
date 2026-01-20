export function formatDateToYYYYMMDDHHmmss(_date = new Date()) {
  const y = _date.getFullYear()
  const m = String((_date.getMonth() + 1)).padStart(2, '0')
  const d = String(_date.getDate()).padStart(2, '0')
  const h = String(_date.getHours()).padStart(2, '0')
  const mm = String(_date.getMinutes()).padStart(2, '0')
  const ss = String(_date.getSeconds()).padStart(2, '0')
  const _str = `${y}${m}${d}${h}${mm}${ss}`
  return _str
}

// 下载
export function downloadFile(binaryStream: Blob, fileName: string) {
  let customFilename = fileName;
  const downloadUrl = URL.createObjectURL(binaryStream)
  const a = document.createElement('a')
  a.href = downloadUrl
  a.download = `${customFilename}_${formatDateToYYYYMMDDHHmmss()}`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  // 释放内存
  URL.revokeObjectURL(downloadUrl);
}