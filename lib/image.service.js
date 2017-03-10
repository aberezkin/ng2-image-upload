"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var ImageService = (function () {
    function ImageService() {
    }
    ImageService.prototype.setUrl = function (url) {
        this.url = url;
    };
    ImageService.prototype.postImage = function (image, headers) {
        var _this = this;
        this.checkUrl();
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('image', image);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(xhr.response);
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', _this.url, true);
            if (headers)
                for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                    var header = headers_1[_i];
                    xhr.setRequestHeader(header.header, header.value);
                }
            xhr.send(formData);
        });
    };
    ImageService.prototype.checkUrl = function () {
        if (!this.url) {
            throw new Error('Url is not set! Please use setUrl(url) method before doing queries');
        }
    };
    ImageService.decorators = [
        { type: core_1.Injectable },
    ];
    ImageService.ctorParameters = function () { return []; };
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map