"use strict";
exports.__esModule = true;
var Upload = /** @class */ (function () {
    function Upload(msg) {
        this.msg = msg;
    }
    Upload.prototype.uploadFile = function (_a) {
        var url = _a.url, file = _a.file;
        console.log(this.msg);
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append('file', file);
        xhr.open('post', url, true);
        // 设置请求头
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data')
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                console.log('success!');
            }
        };
        xhr.send(formData);
    };
    return Upload;
}());
exports.Upload = Upload;
