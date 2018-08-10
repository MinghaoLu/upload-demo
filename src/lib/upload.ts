export class Upload {
  msg: string
  constructor (msg: string) {
    this.msg = msg
  }

  public uploadFile ({ url, file}) {
    console.log(this.msg)

    let xhr = new XMLHttpRequest()

    let formData = new FormData()
    formData.append('file', file)

    xhr.open('post', url, true)

    // 设置请求头
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data')

    xhr.onreadystatechange = function () {
      if(xhr.status === 200) {
        console.log('success!')
      }
    }
    xhr.send(formData)

  }
}

