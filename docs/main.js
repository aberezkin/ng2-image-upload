(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/fesm5/angular2-image-upload.js":
/*!************************************************************************!*\
  !*** F:/Projects/ng2-image-upload/dist/fesm5/angular2-image-upload.js ***!
  \************************************************************************/
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
        if (this.url && filesToUploadNum !== 0) {
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
        if (--this.pendingFilesCounter === 0) {
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW1hZ2UtdXBsb2FkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyMi1pbWFnZS11cGxvYWQvbGliL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvZmlsZS1ob2xkZXIudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmaWxlRHJvcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcclxuICBAT3V0cHV0KCkgZmlsZU92ZXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXREYXRhVHJhbnNmZXIoZXZlbnQ6IGFueSk6IERhdGFUcmFuc2ZlciB7XHJcbiAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyIDogZXZlbnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBoYXNGaWxlcyh0eXBlczogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXR5cGVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZXMuaW5kZXhPZikge1xyXG4gICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZignRmlsZXMnKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVzLmNvbnRhaW5zKSB7XHJcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBtYXRjaFJ1bGUocnVsZTogc3RyaW5nLCBjYW5kaWRhdGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZS5zcGxpdCgnKicpLmpvaW4oJy4qJykgKyAnJCcpLnRlc3QoY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIG9uRHJvcChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xyXG5cclxuICAgIGlmICghRmlsZURyb3BEaXJlY3RpdmUuaGFzRmlsZXMoZGF0YVRyYW5zZmVyLnR5cGVzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsdGVyRmlsZXMoZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuZmlsZURyb3AuZW1pdChmaWxlcyk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gRmlsZURyb3BEaXJlY3RpdmUuZ2V0RGF0YVRyYW5zZmVyKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIUZpbGVEcm9wRGlyZWN0aXZlLmhhc0ZpbGVzKGRhdGFUcmFuc2Zlci50eXBlcykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZmlsZU92ZXIuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyRmlsZXMoZmlsZXM6IEZpbGVMaXN0KTogYW55IHtcclxuICAgIGlmICghdGhpcy5hY2NlcHQgfHwgdGhpcy5hY2NlcHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NlcHRlZEZpbGVzOiBGaWxlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hY2NlcHQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoRmlsZURyb3BEaXJlY3RpdmUubWF0Y2hSdWxlKHRoaXMuYWNjZXB0W2pdLCBmaWxlc1tpXS50eXBlKSkge1xyXG4gICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGVzW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBwYXJ0TmFtZTogc3RyaW5nID0gJ2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRm9ybURhdGE/OiB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfSxcclxuICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIGlmICghdXJsIHx8IHVybCA9PT0gJycpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcmwgaXMgbm90IHNldCEgUGxlYXNlIHNldCBpdCBiZWZvcmUgZG9pbmcgcXVlcmllcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgaWYgKGN1c3RvbUZvcm1EYXRhKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGN1c3RvbUZvcm1EYXRhKSkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGN1c3RvbUZvcm1EYXRhW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKHBhcnROYW1lLCBpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHsgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUhvbGRlciB7XHJcbiAgcHVibGljIHBlbmRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgc2VydmVyUmVzcG9uc2U6IHsgc3RhdHVzOiBudW1iZXIsIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3JjOiBzdHJpbmcsIHB1YmxpYyBmaWxlOiBGaWxlKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVIb2xkZXIgfSBmcm9tICcuLi9maWxlLWhvbGRlcic7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9zdHlsZSc7XHJcbmltcG9ydCB7IFVwbG9hZE1ldGFkYXRhIH0gZnJvbSAnLi4vdXBsb2FkLW1ldGFkYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW1hZ2UtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBmaWxlczogRmlsZUhvbGRlcltdID0gW107XHJcbiAgZmlsZUNvdW50ZXIgPSAwO1xyXG4gIGZpbGVPdmVyID0gZmFsc2U7XHJcbiAgc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYmVmb3JlVXBsb2FkOiAobWV0YWRhdGE6IFVwbG9hZE1ldGFkYXRhKSA9PiBVcGxvYWRNZXRhZGF0YSB8IFByb21pc2U8VXBsb2FkTWV0YWRhdGE+ID0gbWV0YWRhdGEgPT4gbWV0YWRhdGE7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2FwdGlvbiA9ICdTZWxlY3QgSW1hZ2VzJztcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnY2xhc3MnKSBjc3NDbGFzcyA9ICdpbWctdWwnO1xyXG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uQ2FwdGlvbiA9ICdDbGVhcic7XHJcbiAgQElucHV0KCkgZHJvcEJveE1lc3NhZ2UgPSAnRHJvcCB5b3VyIGltYWdlcyBoZXJlISc7XHJcbiAgQElucHV0KCkgZmlsZVRvb0xhcmdlTWVzc2FnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlcnM6IEh0dHBIZWFkZXJzIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICBASW5wdXQoKSBtYXggPSAxMDA7XHJcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBwcmV2aWV3ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYXJ0TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZTtcclxuICBASW5wdXQoJ2V4dGVuc2lvbnMnKSBzdXBwb3J0ZWRFeHRlbnNpb25zOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSB1cGxvYWRlZEZpbGVzOiBzdHJpbmdbXSB8IEFycmF5PHsgdXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGJsb2I/OiBCbG9iIH0+ID0gW107XHJcbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgdXBsb2FkRmluaXNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XHJcbiAgQE91dHB1dCgpIHByZXZpZXdDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dCcpXHJcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBwZW5kaW5nRmlsZXNDb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlVXBsb2FkU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSkge1xyXG4gICAgICB0aGlzLmZpbGVUb29MYXJnZU1lc3NhZ2UgPSAnQW4gaW1hZ2Ugd2FzIHRvbyBsYXJnZSBhbmQgd2FzIG5vdCB1cGxvYWRlZC4nICsgKHRoaXMubWF4RmlsZVNpemUgPyAoJyBUaGUgbWF4aW11bSBmaWxlIHNpemUgaXMgJyArIHRoaXMubWF4RmlsZVNpemUgLyAxMDI0KSArICdLaUIuJyA6ICcnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA/IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gJ2ltYWdlLycgKyBleHQpIDogWydpbWFnZS8qJ107XHJcbiAgfVxyXG5cclxuICBkZWxldGVBbGwoKSB7XHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goZiA9PiB0aGlzLnJlbW92ZWQuZW1pdChmKSk7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmZpbGVDb3VudGVyID0gMDtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlKGZpbGU6IEZpbGVIb2xkZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5pbmRleE9mKGZpbGUpO1xyXG4gICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlZC5lbWl0KGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld0ZpbGVDbGlja2VkKGZpbGU6IEZpbGVIb2xkZXIpIHtcclxuICAgIHRoaXMucHJldmlld0NsaWNrZWQuZW1pdChmaWxlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnVwbG9hZGVkRmlsZXMgJiYgY2hhbmdlcy51cGxvYWRlZEZpbGVzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc1VwbG9hZGVkRmlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRmlsZUNoYW5nZShmaWxlczogRmlsZUxpc3QpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVtYWluaW5nU2xvdHMgPSB0aGlzLm1heCAtIHRoaXMuZmlsZUNvdW50ZXI7XHJcbiAgICBjb25zdCBmaWxlc1RvVXBsb2FkTnVtID0gZmlsZXMubGVuZ3RoID4gcmVtYWluaW5nU2xvdHMgPyByZW1haW5pbmdTbG90cyA6IGZpbGVzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodGhpcy51cmwgJiYgZmlsZXNUb1VwbG9hZE51bSAhPT0gMCkge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsZUNvdW50ZXIgKz0gZmlsZXNUb1VwbG9hZE51bTtcclxuICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZTtcclxuICAgIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMsIGZpbGVzVG9VcGxvYWROdW0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlT3ZlciA9IChpc092ZXIpID0+IHRoaXMuZmlsZU92ZXIgPSBpc092ZXI7XHJcblxyXG4gIHByaXZhdGUgb25SZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sIGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIpIHtcclxuICAgIGZpbGVIb2xkZXIuc2VydmVyUmVzcG9uc2UgPSB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZSB9O1xyXG4gICAgZmlsZUhvbGRlci5wZW5kaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGxvYWRGaW5pc2hlZC5lbWl0KGZpbGVIb2xkZXIpO1xyXG5cclxuICAgIGlmICgtLXRoaXMucGVuZGluZ0ZpbGVzQ291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1VwbG9hZGVkRmlsZXMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB0aGlzLnVwbG9hZGVkRmlsZXNbaV07XHJcblxyXG4gICAgICBsZXQgZmlsZUJsb2I6IEJsb2IsXHJcbiAgICAgICAgZmlsZTogRmlsZSxcclxuICAgICAgICBmaWxlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgIGZpbGVVcmwgPSBkYXRhLnVybDtcclxuICAgICAgICBmaWxlQmxvYiA9IChkYXRhLmJsb2IpID8gZGF0YS5ibG9iIDogbmV3IEJsb2IoW2RhdGFdKTtcclxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZGF0YS5maWxlTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsZVVybCA9IGRhdGE7XHJcbiAgICAgICAgZmlsZUJsb2IgPSBuZXcgQmxvYihbZmlsZVVybF0pO1xyXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBmaWxlVXJsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maWxlcy5wdXNoKG5ldyBGaWxlSG9sZGVyKGZpbGVVcmwsIGZpbGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkRmlsZXMoZmlsZXM6IEZpbGVMaXN0LCBmaWxlc1RvVXBsb2FkTnVtOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUb1VwbG9hZE51bTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1heEZpbGVTaXplICYmIGZpbGUuc2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcclxuICAgICAgICB0aGlzLmZpbGVDb3VudGVyLS07XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBsb2FkU3RhdGVDaGFuZ2VkLmVtaXQoZmFsc2UpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiZWZvcmVVcGxvYWRSZXN1bHQ6IFVwbG9hZE1ldGFkYXRhID0gYXdhaXQgdGhpcy5iZWZvcmVVcGxvYWQoeyBmaWxlLCB1cmw6IHRoaXMudXJsLCBhYm9ydDogZmFsc2UgfSk7XHJcblxyXG4gICAgICBpZiAoYmVmb3JlVXBsb2FkUmVzdWx0LmFib3J0KSB7XHJcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyID0gbmV3IEZpbGVIb2xkZXIoZXZlbnQudGFyZ2V0LnJlc3VsdCwgYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlSG9sZGVyKTtcclxuICAgICAgICB0aGlzLnVwbG9hZFNpbmdsZUZpbGUoZmlsZUhvbGRlciwgYmVmb3JlVXBsb2FkUmVzdWx0LnVybCwgYmVmb3JlVXBsb2FkUmVzdWx0LmZvcm1EYXRhKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZFNpbmdsZUZpbGUoZmlsZUhvbGRlcjogRmlsZUhvbGRlciwgdXJsID0gdGhpcy51cmwsIGN1c3RvbUZvcm0/OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICB0aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIrKztcclxuICAgICAgZmlsZUhvbGRlci5wZW5kaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlXHJcbiAgICAgICAgLnVwbG9hZEltYWdlKHVybCwgZmlsZUhvbGRlci5maWxlLCB0aGlzLmhlYWRlcnMsIHRoaXMucGFydE5hbWUsIGN1c3RvbUZvcm0sIHRoaXMud2l0aENyZWRlbnRpYWxzKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICByZXNwb25zZSA9PiB0aGlzLm9uUmVzcG9uc2UocmVzcG9uc2UsIGZpbGVIb2xkZXIpLFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzcG9uc2UoZXJyb3IsIGZpbGVIb2xkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGUoZmlsZUhvbGRlcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtZHJvcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBJbWFnZVVwbG9hZENvbXBvbmVudCxcclxuICAgIEZpbGVEcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbSW1hZ2VVcGxvYWRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW1hZ2VVcGxvYWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ltYWdlVXBsb2FkU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQUVBO1FBS1ksYUFBUSxHQUEwQixJQUFJ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

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
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-image-upload */ "../../dist/fesm5/angular2-image-upload.js");
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
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_3__["ImageUploadModule"].forRoot(),
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
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-image-upload */ "../../dist/fesm5/angular2-image-upload.js");
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
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_1__["ImageUploadModule"]
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