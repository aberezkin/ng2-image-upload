(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/fesm5/ng2-image-upload.js":
/*!*******************************************************************!*\
  !*** F:/Projects/ng2-image-upload/dist/fesm5/ng2-image-upload.js ***!
  \*******************************************************************/
/*! exports provided: ImageUploadModule, ImageUploadComponent, FileHolder, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHolder", function() { return FileHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ImageUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective() {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.getDataTransfer = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    /**
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.hasFiles = /**
     * @param {?} types
     * @return {?}
     */
    function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    /**
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    FileDropDirective.matchRule = /**
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    function (rule, candidate) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fileOver.emit(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    FileDropDirective.prototype.filterFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        /** @type {?} */
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fileDrop]'
                },] }
    ];
    FileDropDirective.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        fileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }]
    };
    return FileDropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    ImageUploadService.prototype.uploadImage = /**
     * @param {?} url
     * @param {?} image
     * @param {?=} headers
     * @param {?=} partName
     * @param {?=} customFormData
     * @param {?=} withCredentials
     * @return {?}
     */
    function (url, image, headers, partName, customFormData, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        var e_1, _a;
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        /** @type {?} */
        var formData = new FormData();
        if (customFormData) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(customFormData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    formData.append(key, customFormData[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        formData.append(partName, image);
        return this.http.post(url, formData, { withCredentials: withCredentials, headers: headers, observe: 'response' });
    };
    ImageUploadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ImageUploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    return ImageUploadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FileHolder = /** @class */ (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = function (metadata) { return metadata; };
        this.buttonCaption = 'Select Images';
        this.disabled = false;
        this.cssClass = 'img-ul';
        this.clearButtonCaption = 'Clear';
        this.dropBoxMessage = 'Drop your images here!';
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.uploadedFiles = [];
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.previewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pendingFilesCounter = 0;
        this.onFileOver = function (isOver) { return _this.fileOver = isOver; };
    }
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.deleteAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.removed.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageUploadComponent.prototype.deleteFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.removed.emit(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageUploadComponent.prototype.previewFileClicked = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.previewClicked.emit(file);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    ImageUploadComponent.prototype.onFileChange = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        if (this.disabled)
            return;
        /** @type {?} */
        var remainingSlots = this.max - this.fileCounter;
        /** @type {?} */
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    /**
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    ImageUploadComponent.prototype.onResponse = /**
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    function (response, fileHolder) {
        fileHolder.serverResponse = { status: response.status, response: response };
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.uploadStateChanged.emit(false);
        }
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.processUploadedFiles = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            /** @type {?} */
            var data = this.uploadedFiles[i];
            /** @type {?} */
            var fileBlob = void 0;
            /** @type {?} */
            var file = void 0;
            /** @type {?} */
            var fileUrl = void 0;
            if (data instanceof Object) {
                fileUrl = data.url;
                fileBlob = (data.blob) ? data.blob : new Blob([data]);
                file = new File([fileBlob], data.fileName);
            }
            else {
                fileUrl = data;
                fileBlob = new Blob([fileUrl]);
                file = new File([fileBlob], fileUrl);
            }
            this.files.push(new FileHolder(fileUrl, file));
        }
    };
    /**
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    ImageUploadComponent.prototype.uploadFiles = /**
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    function (files, filesToUploadNum) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var _loop_1, this_1, i;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var file, beforeUploadResult, img, reader;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = files[i];
                                        if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            this_1.showFileTooLargeMessage = true;
                                            this_1.uploadStateChanged.emit(false);
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.beforeUpload({ file: file, url: this_1.url, abort: false })];
                                    case 1:
                                        beforeUploadResult = _a.sent();
                                        if (beforeUploadResult.abort) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            return [2 /*return*/, "continue"];
                                        }
                                        img = (/** @type {?} */ (document.createElement('img')));
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', function (event) {
                                            /** @type {?} */
                                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                            _this.files.push(fileHolder);
                                            _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                        }, false);
                                        reader.readAsDataURL(beforeUploadResult.file);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < filesToUploadNum)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    ImageUploadComponent.prototype.uploadSingleFile = /**
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    function (fileHolder, url, customForm) {
        var _this = this;
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    ImageUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'image-upload',
                    template: "<div\n     fileDrop\n     [accept]=\"supportedExtensions\"\n     (fileOver)=\"onFileOver($event)\"\n     (fileDrop)=\"onFileChange($event)\"\n     [ngClass]=\"cssClass\"\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \n     [ngStyle]=\"style?.layout\"\n>\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \n    <label *ngIf=\"fileCounter != max\"\n      class=\"img-ul-upload img-ul-button\" \n      [ngStyle]=\"style?.selectButton\"\n      [ngClass]=\"{'img-ul-disabled': disabled}\">\n      <span [innerText]=\"buttonCaption\"></span>\n      <input\n        type=\"file\"\n        [disabled]=\"disabled\"\n        [accept]=\"supportedExtensions\"\n        multiple (change)=\"onFileChange(input.files)\"\n        #input>\n    </label>\n    <button *ngIf=\"fileCounter > 0\"\n      [disabled]=\"disabled\"\n      class=\"img-ul-clear img-ul-button\" \n      (click)=\"deleteAll()\" \n      [ngStyle]=\"style?.clearButton\"\n      [innerText]=\"clearButtonCaption\">\n    </button>\n    <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\n  </div>\n\n  <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\n\n  <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\n    <div\n      class=\"img-ul-image\"\n      *ngFor=\"let file of files\"\n      (click)=\"previewFileClicked(file)\"\n      [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n    >\n      <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\n        <div class=\"img-ul-spinning-circle\"></div>\n      </div>\n      <div *ngIf=\"!file.pending\" \n        [ngClass]=\"{'img-ul-disabled': disabled}\" \n        class=\"img-ul-x-mark\" \n        (click)=\"deleteFile(file)\">\n        <span class=\"img-ul-close\"></span>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    ImageUploadComponent.ctorParameters = function () { return [
        { type: ImageUploadService }
    ]; };
    ImageUploadComponent.propDecorators = {
        beforeUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonCaption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] }],
        clearButtonCaption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropBoxMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileTooLargeMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        preview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        partName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        supportedExtensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['extensions',] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        withCredentials: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uploadedFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        uploadStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        uploadFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] }]
    };
    return ImageUploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    /**
     * @return {?}
     */
    ImageUploadModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ImageUploadModule,
            providers: [ImageUploadService]
        };
    };
    ImageUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [
                        ImageUploadComponent,
                        FileDropDirective
                    ],
                    exports: [ImageUploadComponent]
                },] }
    ];
    return ImageUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWltYWdlLXVwbG9hZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWltYWdlLXVwbG9hZC9saWIvZmlsZS1kcm9wLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiLCJuZzovL25nMi1pbWFnZS11cGxvYWQvbGliL2ZpbGUtaG9sZGVyLnRzIiwibmc6Ly9uZzItaW1hZ2UtdXBsb2FkL2xpYi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmaWxlRHJvcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcclxuICBAT3V0cHV0KCkgZmlsZU92ZXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXREYXRhVHJhbnNmZXIoZXZlbnQ6IGFueSk6IERhdGFUcmFuc2ZlciB7XHJcbiAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyIDogZXZlbnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBoYXNGaWxlcyh0eXBlczogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXR5cGVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZXMuaW5kZXhPZikge1xyXG4gICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZignRmlsZXMnKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVzLmNvbnRhaW5zKSB7XHJcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBtYXRjaFJ1bGUocnVsZTogc3RyaW5nLCBjYW5kaWRhdGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZS5zcGxpdCgnKicpLmpvaW4oJy4qJykgKyAnJCcpLnRlc3QoY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIG9uRHJvcChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xyXG5cclxuICAgIGlmICghRmlsZURyb3BEaXJlY3RpdmUuaGFzRmlsZXMoZGF0YVRyYW5zZmVyLnR5cGVzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsdGVyRmlsZXMoZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuZmlsZURyb3AuZW1pdChmaWxlcyk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gRmlsZURyb3BEaXJlY3RpdmUuZ2V0RGF0YVRyYW5zZmVyKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIUZpbGVEcm9wRGlyZWN0aXZlLmhhc0ZpbGVzKGRhdGFUcmFuc2Zlci50eXBlcykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZmlsZU92ZXIuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyRmlsZXMoZmlsZXM6IEZpbGVMaXN0KTogYW55IHtcclxuICAgIGlmICghdGhpcy5hY2NlcHQgfHwgdGhpcy5hY2NlcHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NlcHRlZEZpbGVzOiBGaWxlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hY2NlcHQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoRmlsZURyb3BEaXJlY3RpdmUubWF0Y2hSdWxlKHRoaXMuYWNjZXB0W2pdLCBmaWxlc1tpXS50eXBlKSkge1xyXG4gICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGVzW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBwYXJ0TmFtZTogc3RyaW5nID0gJ2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRm9ybURhdGE/OiB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIGlmICghdXJsIHx8IHVybCA9PT0gJycpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcmwgaXMgbm90IHNldCEgUGxlYXNlIHNldCBpdCBiZWZvcmUgZG9pbmcgcXVlcmllcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbUZvcm1EYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGN1c3RvbUZvcm1EYXRhKSkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGN1c3RvbUZvcm1EYXRhW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKHBhcnROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHsgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUhvbGRlciB7XHJcbiAgcHVibGljIHBlbmRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgc2VydmVyUmVzcG9uc2U6IHsgc3RhdHVzOiBudW1iZXIsIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3JjOiBzdHJpbmcsIHB1YmxpYyBmaWxlOiBGaWxlKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVIb2xkZXIgfSBmcm9tICcuLi9maWxlLWhvbGRlcic7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9zdHlsZSc7XHJcbmltcG9ydCB7IFVwbG9hZE1ldGFkYXRhIH0gZnJvbSAnLi4vdXBsb2FkLW1ldGFkYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW1hZ2UtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBmaWxlczogRmlsZUhvbGRlcltdID0gW107XHJcbiAgZmlsZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgZmlsZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93RmlsZVRvb0xhcmdlTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBiZWZvcmVVcGxvYWQ6IChtZXRhZGF0YTogVXBsb2FkTWV0YWRhdGEpID0+IFVwbG9hZE1ldGFkYXRhIHwgUHJvbWlzZTxVcGxvYWRNZXRhZGF0YT4gPSBtZXRhZGF0YSA9PiBtZXRhZGF0YTtcclxuICBASW5wdXQoKSBidXR0b25DYXB0aW9uID0gJ1NlbGVjdCBJbWFnZXMnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCdjbGFzcycpIGNzc0NsYXNzID0gJ2ltZy11bCc7XHJcbiAgQElucHV0KCkgY2xlYXJCdXR0b25DYXB0aW9uID0gJ0NsZWFyJztcclxuICBASW5wdXQoKSBkcm9wQm94TWVzc2FnZSA9ICdEcm9wIHlvdXIgaW1hZ2VzIGhlcmUhJztcclxuICBASW5wdXQoKSBmaWxlVG9vTGFyZ2VNZXNzYWdlO1xyXG4gIEBJbnB1dCgpIGhlYWRlcnM6IEh0dHBIZWFkZXJzIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICBASW5wdXQoKSBtYXggPSAxMDA7XHJcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBwcmV2aWV3ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYXJ0TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZTtcclxuICBASW5wdXQoJ2V4dGVuc2lvbnMnKSBzdXBwb3J0ZWRFeHRlbnNpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSB1cGxvYWRlZEZpbGVzOiBzdHJpbmdbXSB8IEFycmF5PHsgdXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGJsb2I/OiBCbG9iIH0+ID0gW107XHJcbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgdXBsb2FkRmluaXNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHByZXZpZXdDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dCcpXHJcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBwZW5kaW5nRmlsZXNDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VVcGxvYWRTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5maWxlVG9vTGFyZ2VNZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSA9ICdBbiBpbWFnZSB3YXMgdG9vIGxhcmdlIGFuZCB3YXMgbm90IHVwbG9hZGVkLicgKyAodGhpcy5tYXhGaWxlU2l6ZSA/ICgnIFRoZSBtYXhpbXVtIGZpbGUgc2l6ZSBpcyAnICsgdGhpcy5tYXhGaWxlU2l6ZSAvIDEwMjQpICsgJ0tpQi4nIDogJycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdXBwb3J0ZWRFeHRlbnNpb25zID0gdGhpcy5zdXBwb3J0ZWRFeHRlbnNpb25zID8gdGhpcy5zdXBwb3J0ZWRFeHRlbnNpb25zLm1hcCgoZXh0KSA9PiAnaW1hZ2UvJyArIGV4dCkgOiBbJ2ltYWdlLyonXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUFsbCgpIHtcclxuICAgIHRoaXMuZmlsZXMuZm9yRWFjaChmID0+IHRoaXMucmVtb3ZlZC5lbWl0KGYpKTtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZmlsZUNvdW50ZXIgPSAwO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpbGUoZmlsZTogRmlsZUhvbGRlcik6IHZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5maWxlcy5pbmRleE9mKGZpbGUpO1xyXG4gICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld0ZpbGVDbGlja2VkKGZpbGU6IEZpbGVIb2xkZXIpIHtcclxuICAgIHRoaXMucHJldmlld0NsaWNrZWQuZW1pdChmaWxlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnVwbG9hZGVkRmlsZXMgJiYgY2hhbmdlcy51cGxvYWRlZEZpbGVzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc1VwbG9hZGVkRmlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRmlsZUNoYW5nZShmaWxlczogRmlsZUxpc3QpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHJlbWFpbmluZ1Nsb3RzID0gdGhpcy5tYXggLSB0aGlzLmZpbGVDb3VudGVyO1xyXG4gICAgbGV0IGZpbGVzVG9VcGxvYWROdW0gPSBmaWxlcy5sZW5ndGggPiByZW1haW5pbmdTbG90cyA/IHJlbWFpbmluZ1Nsb3RzIDogZmlsZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh0aGlzLnVybCAmJiBmaWxlc1RvVXBsb2FkTnVtICE9IDApIHtcclxuICAgICAgdGhpcy51cGxvYWRTdGF0ZUNoYW5nZWQuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbGVDb3VudGVyICs9IGZpbGVzVG9VcGxvYWROdW07XHJcbiAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzLCBmaWxlc1RvVXBsb2FkTnVtKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZU92ZXIgPSAoaXNPdmVyKSA9PiB0aGlzLmZpbGVPdmVyID0gaXNPdmVyO1xyXG5cclxuICBwcml2YXRlIG9uUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+LCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyKSB7XHJcbiAgICBmaWxlSG9sZGVyLnNlcnZlclJlc3BvbnNlID0geyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UgfTtcclxuICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKTtcclxuXHJcbiAgICBpZiAoLS10aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIgPT0gMCkge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1VwbG9hZGVkRmlsZXMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy51cGxvYWRlZEZpbGVzW2ldO1xyXG5cclxuICAgICAgbGV0IGZpbGVCbG9iOiBCbG9iLFxyXG4gICAgICAgIGZpbGU6IEZpbGUsXHJcbiAgICAgICAgZmlsZVVybDogc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICBmaWxlVXJsID0gZGF0YS51cmw7XHJcbiAgICAgICAgZmlsZUJsb2IgPSAoZGF0YS5ibG9iKSA/IGRhdGEuYmxvYiA6IG5ldyBCbG9iKFtkYXRhXSk7XHJcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtmaWxlQmxvYl0sIGRhdGEuZmlsZU5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGVVcmwgPSBkYXRhO1xyXG4gICAgICAgIGZpbGVCbG9iID0gbmV3IEJsb2IoW2ZpbGVVcmxdKTtcclxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZmlsZVVybCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmlsZXMucHVzaChuZXcgRmlsZUhvbGRlcihmaWxlVXJsLCBmaWxlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHVwbG9hZEZpbGVzKGZpbGVzOiBGaWxlTGlzdCwgZmlsZXNUb1VwbG9hZE51bTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzVG9VcGxvYWROdW07IGkrKykge1xyXG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XHJcblxyXG4gICAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVTaXplKSB7XHJcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmVmb3JlVXBsb2FkUmVzdWx0OiBVcGxvYWRNZXRhZGF0YSA9IGF3YWl0IHRoaXMuYmVmb3JlVXBsb2FkKHsgZmlsZSwgdXJsOiB0aGlzLnVybCwgYWJvcnQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgaWYgKGJlZm9yZVVwbG9hZFJlc3VsdC5hYm9ydCkge1xyXG4gICAgICAgIHRoaXMuZmlsZUNvdW50ZXItLTtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XHJcblxyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZUhvbGRlcjogRmlsZUhvbGRlciA9IG5ldyBGaWxlSG9sZGVyKGV2ZW50LnRhcmdldC5yZXN1bHQsIGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlKTtcclxuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZUhvbGRlcik7XHJcbiAgICAgICAgdGhpcy51cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXIsIGJlZm9yZVVwbG9hZFJlc3VsdC51cmwsIGJlZm9yZVVwbG9hZFJlc3VsdC5mb3JtRGF0YSk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIsIHVybCA9IHRoaXMudXJsLCBjdXN0b21Gb3JtPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgdGhpcy5wZW5kaW5nRmlsZXNDb3VudGVyKys7XHJcbiAgICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmltYWdlU2VydmljZVxyXG4gICAgICAgIC51cGxvYWRJbWFnZSh1cmwsIGZpbGVIb2xkZXIuZmlsZSwgdGhpcy5oZWFkZXJzLCB0aGlzLnBhcnROYW1lLCBjdXN0b21Gb3JtLCB0aGlzLndpdGhDcmVkZW50aWFscylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5vblJlc3BvbnNlKHJlc3BvbnNlLCBmaWxlSG9sZGVyKSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblJlc3BvbnNlKGVycm9yLCBmaWxlSG9sZGVyKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVGaWxlKGZpbGVIb2xkZXIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwbG9hZEZpbmlzaGVkLmVtaXQoZmlsZUhvbGRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLWRyb3AuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9pbWFnZS11cGxvYWQuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSW1hZ2VVcGxvYWRDb21wb25lbnQsXHJcbiAgICBGaWxlRHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0ltYWdlVXBsb2FkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEltYWdlVXBsb2FkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtJbWFnZVVwbG9hZFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFFQTtRQUtZLGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FB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

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"github-star-button\">\n  <a class=\"github-button\"\n     href=\"https://github.com/aberezkin/ng2-image-upload\"\n     data-icon=\"octicon-star\"\n     data-size=\"large\"\n     data-show-count=\"true\"\n     aria-label=\"Star aberezkin/ng2-image-upload on GitHub\"\n  >Star</a>\n</div>\n\n<div class=\"jumbotron jumbotron-fluid text-center\">\n  <h1 class=\"display-3\">\n    Angular Image Upload\n  </h1>\n  <p class=\"lead\">\n    Angular component for image uploading\n  </p>\n</div>\n\n<div class=\"d-flex justify-content-center align-items-center mb-3\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"demo\" routerLinkActive=\"active\">Demo</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"readme\" routerLinkActive=\"active\">Readme</a>\n    </li>\n  </ul>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_image_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-image-upload */ "../../dist/fesm5/ng2-image-upload.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-md */ "../../node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.module */ "./src/app/demo/demo.module.ts");
/* harmony import */ var _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readme/components/readme.component */ "./src/app/readme/components/readme.component.ts");
/* harmony import */ var _readme_readme_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./readme/readme.module */ "./src/app/readme/readme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["DemoModule"],
                _readme_readme_module__WEBPACK_IMPORTED_MODULE_9__["ReadmeModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_4__["NgxMdModule"].forRoot(),
                ng2_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
                        path: '',
                        redirectTo: 'demo',
                        pathMatch: 'prefix'
                    }, {
                        path: 'demo',
                        component: _demo_components_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]
                    }, {
                        path: 'readme',
                        component: _readme_components_readme_component__WEBPACK_IMPORTED_MODULE_8__["ReadmeComponent"]
                    }], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo/components/basic/basic.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/basic/basic.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-3\">Basic Usage</h4>\n\n<image-upload url=\"http://mockbin.org/request\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\"></image-upload>]]></code></pre>\n\n<h5 class=\"mb-3 mt-3\">With headers</h5>\n\n<image-upload url=\"http://mockbin.org/request\" [headers]=\"myHeaders\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [headers]=\"myHeaders\"></image-upload>]]></code></pre>\n\n<pre><code class=\"language-typescript\"><![CDATA[myHeaders: { [header: string]: string | string[] } = {\n  'Authorization': 'MyToken',\n  'Another-Header': 'AnotherValue'\n};]]>\n</code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/basic/basic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/basic/basic.component.ts ***!
  \**********************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleComponent = /** @class */ (function () {
    function BasicExampleComponent() {
        this.myHeaders = {
            'Authorization': 'MyToken',
            'Another-Header': 'AnotherValue'
        };
    }
    BasicExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/demo/components/basic/basic.component.html")
        })
    ], BasicExampleComponent);
    return BasicExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/customise/customise.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo/components/customise/customise.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Custom Labels</h4>\n\n<image-upload url=\"http://mockbin.org/request\" buttonCaption=\"PRESS ME AAAAAAAAAH\" dropBoxMessage=\"DROP ON ME AAAAAAAAAH\" clearButtonCaption=\"CLEAR ME AAAAAAAAAH\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload\n  url=\"http://mockbin.org/request\"\n  buttonCaption=\"PRESS ME AAAAAAAAAH\"\n  dropBoxMessage=\"DROP ON ME AAAAAAAAAH\"\n  clearButtonCaption=\"CLEAR ME AAAAAAAAAH\">\n</image-upload>]]></code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/customise/customise.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/customise/customise.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomiseComponent", function() { return CustomiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomiseComponent = /** @class */ (function () {
    function CustomiseComponent() {
    }
    CustomiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customise',
            template: __webpack_require__(/*! ./customise.component.html */ "./src/app/demo/components/customise/customise.component.html")
        })
    ], CustomiseComponent);
    return CustomiseComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/demo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/demo/components/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\" highlight-js-content=\".highlight\">\n  <basic></basic>\n  <filter></filter>\n  <customise></customise>\n  <events></events>\n  <styles></styles>\n  <uploaded></uploaded>\n  <disabled></disabled>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/components/demo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/components/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"](false);
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/components/demo.component.html")
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/disabled/disabled.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/disabled/disabled.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Disable component</h4>\n\n<image-upload url=\"http://mockbin.org/request\" [disabled]=\"true\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [disabled]=\"true\"></image-upload>]]></code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/disabled/disabled.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/disabled/disabled.component.ts ***!
  \****************************************************************/
/*! exports provided: DisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledExampleComponent", function() { return DisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisabledExampleComponent = /** @class */ (function () {
    function DisabledExampleComponent() {
    }
    DisabledExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'disabled',
            template: __webpack_require__(/*! ./disabled.component.html */ "./src/app/demo/components/disabled/disabled.component.html")
        })
    ], DisabledExampleComponent);
    return DisabledExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/events/events.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/events/events.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Events</h4>\n\n<image-upload url=\"http://mockbin.org/request\"\n              (removed)=\"onRemoved($event)\"\n              (uploadFinished)=\"onUploadFinished($event)\"\n              (uploadStateChanged)=\"onUploadStateChanged($event)\">\n</image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload\n  url=\"http://mockbin.org/request\"\n  (removed)=\"onRemoved($event)\"\n  (uploadFinished)=\"onUploadFinished($event)\"\n  (uploadStateChanged)=\"onUploadStateChanged($event)\">\n</image-upload>]]></code></pre>\n\n<pre><code class=\"language-typescript\"><![CDATA[onUploadFinished(file: FileHolder) {\n  console.log(file);\n}\n\nonRemoved(file: FileHolder) {\n  console.log(file);\n}\n\nonUploadStateChanged(state: boolean) {\n  console.log(state);\n}]]>\n</code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/events/events.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/components/events/events.component.ts ***!
  \************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.onUploadFinished = function (file) {
        console.log(file);
    };
    EventsComponent.prototype.onRemoved = function (file) {
        console.log(file);
    };
    EventsComponent.prototype.onUploadStateChanged = function (state) {
        console.log(state);
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/demo/components/events/events.component.html")
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/filter/filter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo/components/filter/filter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Limit and filter images</h4>\n\n<image-upload url=\"http://mockbin.org/request\" [max]=\"2\" [extensions]=\"['jpeg','png']\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [max]=\"2\" [extensions]=\"['jpeg','png']\"></image-upload>]]></code></pre>\n\n<h5 class=\"mb-3 mt-3\">Manual filtering and editing</h5>\n\n<image-upload url=\"http://mockbin.org/request\" [beforeUpload]=\"onBeforeUpload\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [beforeUpload]=\"onBeforeUpload\"></image-upload>]]></code></pre>\n\n<pre><code class=\"language-typescript\"><![CDATA[private fileCounter = 0;\n\nonBeforeUpload = (metadata: UploadMetadata) => {\n  if (this.fileCounter % 2 === 0) {\n    metadata.abort = true;\n  } else {\n    // mutate the file or replace it entirely - metadata.file\n    metadata.url = 'http://somewhereelse.com'\n  }\n\n  this.fileCounter++;\n  return metadata;\n};]]></code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/filter/filter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/components/filter/filter.component.ts ***!
  \************************************************************/
/*! exports provided: FilterExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExampleComponent", function() { return FilterExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterExampleComponent = /** @class */ (function () {
    function FilterExampleComponent() {
        var _this = this;
        this.fileCounter = 0;
        this.onBeforeUpload = function (metadata) {
            if (_this.fileCounter % 2 === 0) {
                metadata.abort = true;
            }
            else {
                // mutate the file or replace it entirely - metadata.file
                metadata.url = 'http://somewhereelse.com';
            }
            _this.fileCounter++;
            return metadata;
        };
    }
    FilterExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/demo/components/filter/filter.component.html")
        })
    ], FilterExampleComponent);
    return FilterExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/style/style.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo/components/style/style.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-5\">Styles</h4>\n\n<h5 class=\"mb-3 mt-3\">Custom CSS Class</h5>\n\n<image-upload url=\"http://mockbin.org/request\" class=\"customClass\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" class=\"customClass\"></image-upload>]]></code></pre>\n\n<pre><code class=\"language-css\"><![CDATA[.customClass {\n    background-color: #dd3;\n    border-radius: 5px;\n    margin:5px;\n    width: 500px;\n}\n\n.customClass .img-ul-upload {\n    background-color: #000 !important;\n}\n\n.customClass .img-ul-clear {\n    background-color: #B819BB !important;\n}\n\n.customClass .img-ul-drag-box-msg {\n    color: purple !important;\n}\n\n.customClass .img-ul-container {\n    background-color: #FF6CAD !important;\n}\n]]></code></pre>\n\n<h5 class=\"mb-3 mt-3\">Custom Style</h5>\n\n<image-upload url=\"http://mockbin.org/request\" [style]=\"customStyle\"></image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [style]=\"customStyle\"></image-upload>]]></code></pre>\n\n<pre><code class=\"language-typescript\"><![CDATA[customStyle = {\n    selectButton: {\n      \"background-color\": \"yellow\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#000\"\n    },\n    clearButton: {\n      \"background-color\": \"#FFF\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#000\",\n      \"margin-left\": \"10px\"\n    },\n    layout: {\n      \"background-color\": \"purple\",\n      \"border-radius\": \"25px\",\n      \"color\": \"#FFF\",\n      \"font-size\": \"15px\",\n      \"margin\": \"10px\",\n      \"padding-top\": \"5px\",\n      \"width\": \"500px\"\n    },\n    previewPanel: {\n      \"background-color\": \"#894489\",\n      \"border-radius\": \"0 0 25px 25px\",\n    }\n  }\n]]></code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/style/style.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/style/style.component.ts ***!
  \**********************************************************/
/*! exports provided: StyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleComponent", function() { return StyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StyleComponent = /** @class */ (function () {
    function StyleComponent() {
        this.customStyle = {
            selectButton: {
                'background-color': 'yellow',
                'border-radius': '25px',
                'color': '#000'
            },
            clearButton: {
                'background-color': '#FFF',
                'border-radius': '25px',
                'color': '#000',
                'margin-left': '10px'
            },
            layout: {
                'background-color': 'purple',
                'border-radius': '25px',
                'border': 'none',
                'color': '#FFF',
                'font-size': '15px',
                'margin': '10px',
                'padding-top': '5px',
                'width': '500px'
            },
            previewPanel: {
                'background-color': '#894489',
                'border-radius': '0 0 25px 25px'
            }
        };
    }
    StyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styles',
            template: __webpack_require__(/*! ./style.component.html */ "./src/app/demo/components/style/style.component.html")
        })
    ], StyleComponent);
    return StyleComponent;
}());



/***/ }),

/***/ "./src/app/demo/components/uploaded/uploaded.component.html":
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uploaded/uploaded.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-3 mt-3\">Uploaded Usage</h4>\n\n<image-upload\n  url=\"http://mockbin.org/request\"\n  [uploadedFiles]=\"images\">\n</image-upload>\n\n<pre><code class=\"language-markup\"><![CDATA[<image-upload url=\"http://mockbin.org/request\" [uploadedFiles]=\"images\"></image-upload>]]></code></pre>\n"

/***/ }),

/***/ "./src/app/demo/components/uploaded/uploaded.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/components/uploaded/uploaded.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedExampleComponent", function() { return UploadedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadedExampleComponent = /** @class */ (function () {
    function UploadedExampleComponent() {
        this.images = [];
    }
    UploadedExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.images = [
                'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/10/11/14/beats-logo-1200-80.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/68/fb/c7/68fbc7bc9eb8c530c6e804c4109ec647.jpg',
                { fileName: 'google-image.jpg', url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }
            ];
        }, 1000);
    };
    UploadedExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uploaded',
            template: __webpack_require__(/*! ./uploaded.component.html */ "./src/app/demo/components/uploaded/uploaded.component.html")
        })
    ], UploadedExampleComponent);
    return UploadedExampleComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-image-upload */ "../../dist/fesm5/ng2-image-upload.js");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic/basic.component */ "./src/app/demo/components/basic/basic.component.ts");
/* harmony import */ var _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customise/customise.component */ "./src/app/demo/components/customise/customise.component.ts");
/* harmony import */ var _components_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo.component */ "./src/app/demo/components/demo.component.ts");
/* harmony import */ var _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/disabled/disabled.component */ "./src/app/demo/components/disabled/disabled.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/demo/components/events/events.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/demo/components/filter/filter.component.ts");
/* harmony import */ var _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/style/style.component */ "./src/app/demo/components/style/style.component.ts");
/* harmony import */ var _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/uploaded/uploaded.component */ "./src/app/demo/components/uploaded/uploaded.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],
                _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicExampleComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterExampleComponent"],
                _components_customise_customise_component__WEBPACK_IMPORTED_MODULE_3__["CustomiseComponent"],
                _components_events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"],
                _components_style_style_component__WEBPACK_IMPORTED_MODULE_8__["StyleComponent"],
                _components_uploaded_uploaded_component__WEBPACK_IMPORTED_MODULE_9__["UploadedExampleComponent"],
                _components_disabled_disabled_component__WEBPACK_IMPORTED_MODULE_5__["DisabledExampleComponent"]
            ],
            imports: [
                ng2_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadModule"]
            ]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/readme/components/readme.component.html":
/*!*********************************************************!*\
  !*** ./src/app/readme/components/readme.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngx-md path=\"assets/readme.md\"></ngx-md>\n</div>\n"

/***/ }),

/***/ "./src/app/readme/components/readme.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/readme/components/readme.component.ts ***!
  \*******************************************************/
/*! exports provided: ReadmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeComponent", function() { return ReadmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReadmeComponent = /** @class */ (function () {
    function ReadmeComponent() {
    }
    ReadmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./readme.component.html */ "./src/app/readme/components/readme.component.html")
        })
    ], ReadmeComponent);
    return ReadmeComponent;
}());



/***/ }),

/***/ "./src/app/readme/readme.module.ts":
/*!*****************************************!*\
  !*** ./src/app/readme/readme.module.ts ***!
  \*****************************************/
/*! exports provided: ReadmeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeModule", function() { return ReadmeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-md */ "../../node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _components_readme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/readme.component */ "./src/app/readme/components/readme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadmeModule = /** @class */ (function () {
    function ReadmeModule() {
    }
    ReadmeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_readme_component__WEBPACK_IMPORTED_MODULE_2__["ReadmeComponent"]
            ],
            imports: [
                ngx_md__WEBPACK_IMPORTED_MODULE_1__["NgxMdModule"]
            ]
        })
    ], ReadmeModule);
    return ReadmeModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "../../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\ng2-image-upload\projects\ng2-image-upload-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map