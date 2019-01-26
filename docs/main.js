(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/fesm5/angular2-image-upload.js":
/*!**************************************************************************************!*\
  !*** /Users/aberezkin/Projects/ng2-image-upload/dist/fesm5/angular2-image-upload.js ***!
  \**************************************************************************************/
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW1hZ2UtdXBsb2FkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyMi1pbWFnZS11cGxvYWQvbGliL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvZmlsZS1ob2xkZXIudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC9saWIvaW1hZ2UtdXBsb2FkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaWxlRHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIGZpbGVPdmVyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBmaWxlRHJvcDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGF0YVRyYW5zZmVyKGV2ZW50OiBhbnkpOiBEYXRhVHJhbnNmZXIge1xuICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIgOiBldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGhhc0ZpbGVzKHR5cGVzOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXR5cGVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVzLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiB0eXBlcy5pbmRleE9mKCdGaWxlcycpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZXMuY29udGFpbnMpIHtcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBtYXRjaFJ1bGUocnVsZTogc3RyaW5nLCBjYW5kaWRhdGU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJ1bGUuc3BsaXQoJyonKS5qb2luKCcuKicpICsgJyQnKS50ZXN0KGNhbmRpZGF0ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xuXG4gICAgaWYgKCFGaWxlRHJvcERpcmVjdGl2ZS5oYXNGaWxlcyhkYXRhVHJhbnNmZXIudHlwZXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWx0ZXJGaWxlcyhkYXRhVHJhbnNmZXIuZmlsZXMpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMuZmlsZURyb3AuZW1pdChmaWxlcyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgIHRoaXMuZmlsZU92ZXIuZW1pdChmYWxzZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IEZpbGVEcm9wRGlyZWN0aXZlLmdldERhdGFUcmFuc2ZlcihldmVudCk7XG5cbiAgICBpZiAoIUZpbGVEcm9wRGlyZWN0aXZlLmhhc0ZpbGVzKGRhdGFUcmFuc2Zlci50eXBlcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZmlsZU92ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRmlsZXMoZmlsZXM6IEZpbGVMaXN0KTogYW55IHtcbiAgICBpZiAoIXRoaXMuYWNjZXB0IHx8IHRoaXMuYWNjZXB0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZpbGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY2VwdGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmFjY2VwdC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoRmlsZURyb3BEaXJlY3RpdmUubWF0Y2hSdWxlKHRoaXMuYWNjZXB0W2pdLCBmaWxlc1tpXS50eXBlKSkge1xuICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlc1tpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjZXB0ZWRGaWxlcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEltYWdlKHVybDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEZpbGUsXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxuICAgICAgICAgICAgICAgICAgICAgcGFydE5hbWU6IHN0cmluZyA9ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICBjdXN0b21Gb3JtRGF0YT86IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9LFxuICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcbiAgICBpZiAoIXVybCB8fCB1cmwgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VybCBpcyBub3Qgc2V0ISBQbGVhc2Ugc2V0IGl0IGJlZm9yZSBkb2luZyBxdWVyaWVzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIGlmIChjdXN0b21Gb3JtRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY3VzdG9tRm9ybURhdGEpKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGN1c3RvbUZvcm1EYXRhW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChwYXJ0TmFtZSwgaW1hZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZm9ybURhdGEsIHsgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlSG9sZGVyIHtcbiAgcHVibGljIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHNlcnZlclJlc3BvbnNlOiB7IHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4gfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3JjOiBzdHJpbmcsIHB1YmxpYyBmaWxlOiBGaWxlKSB7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZUhvbGRlciB9IGZyb20gJy4uL2ZpbGUtaG9sZGVyJztcbmltcG9ydCB7IEltYWdlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi4vc3R5bGUnO1xuaW1wb3J0IHsgVXBsb2FkTWV0YWRhdGEgfSBmcm9tICcuLi91cGxvYWQtbWV0YWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgZmlsZXM6IEZpbGVIb2xkZXJbXSA9IFtdO1xuICBmaWxlQ291bnRlciA9IDA7XG4gIGZpbGVPdmVyID0gZmFsc2U7XG4gIHNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYmVmb3JlVXBsb2FkOiAobWV0YWRhdGE6IFVwbG9hZE1ldGFkYXRhKSA9PiBVcGxvYWRNZXRhZGF0YSB8IFByb21pc2U8VXBsb2FkTWV0YWRhdGE+ID0gbWV0YWRhdGEgPT4gbWV0YWRhdGE7XG4gIEBJbnB1dCgpIGJ1dHRvbkNhcHRpb24gPSAnU2VsZWN0IEltYWdlcyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgnY2xhc3MnKSBjc3NDbGFzcyA9ICdpbWctdWwnO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbkNhcHRpb24gPSAnQ2xlYXInO1xuICBASW5wdXQoKSBkcm9wQm94TWVzc2FnZSA9ICdEcm9wIHlvdXIgaW1hZ2VzIGhlcmUhJztcbiAgQElucHV0KCkgZmlsZVRvb0xhcmdlTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBoZWFkZXJzOiBIdHRwSGVhZGVycyB8IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgcHJldmlldyA9IHRydWU7XG4gIEBJbnB1dCgpIHBhcnROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZTtcbiAgQElucHV0KCdleHRlbnNpb25zJykgc3VwcG9ydGVkRXh0ZW5zaW9uczogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgQElucHV0KCkgdXBsb2FkZWRGaWxlczogc3RyaW5nW10gfCBBcnJheTx7IHVybDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBibG9iPzogQmxvYiB9PiA9IFtdO1xuICBAT3V0cHV0KCkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUhvbGRlcj4oKTtcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHVwbG9hZEZpbmlzaGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpO1xuICBAT3V0cHV0KCkgcHJldmlld0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBwZW5kaW5nRmlsZXNDb3VudGVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VVcGxvYWRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSkge1xuICAgICAgdGhpcy5maWxlVG9vTGFyZ2VNZXNzYWdlID0gJ0FuIGltYWdlIHdhcyB0b28gbGFyZ2UgYW5kIHdhcyBub3QgdXBsb2FkZWQuJyArICh0aGlzLm1heEZpbGVTaXplID8gKCcgVGhlIG1heGltdW0gZmlsZSBzaXplIGlzICcgKyB0aGlzLm1heEZpbGVTaXplIC8gMTAyNCkgKyAnS2lCLicgOiAnJyk7XG4gICAgfVxuICAgIHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA/IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucy5tYXAoKGV4dCkgPT4gJ2ltYWdlLycgKyBleHQpIDogWydpbWFnZS8qJ107XG4gIH1cblxuICBkZWxldGVBbGwoKSB7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKGYgPT4gdGhpcy5yZW1vdmVkLmVtaXQoZikpO1xuICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICB0aGlzLmZpbGVDb3VudGVyID0gMDtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBkZWxldGVGaWxlKGZpbGU6IEZpbGVIb2xkZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuaW5kZXhPZihmaWxlKTtcbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5maWxlQ291bnRlci0tO1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZWQuZW1pdChmaWxlKTtcbiAgfVxuXG4gIHByZXZpZXdGaWxlQ2xpY2tlZChmaWxlOiBGaWxlSG9sZGVyKSB7XG4gICAgdGhpcy5wcmV2aWV3Q2xpY2tlZC5lbWl0KGZpbGUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnVwbG9hZGVkRmlsZXMgJiYgY2hhbmdlcy51cGxvYWRlZEZpbGVzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnByb2Nlc3NVcGxvYWRlZEZpbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgb25GaWxlQ2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCByZW1haW5pbmdTbG90cyA9IHRoaXMubWF4IC0gdGhpcy5maWxlQ291bnRlcjtcbiAgICBjb25zdCBmaWxlc1RvVXBsb2FkTnVtID0gZmlsZXMubGVuZ3RoID4gcmVtYWluaW5nU2xvdHMgPyByZW1haW5pbmdTbG90cyA6IGZpbGVzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnVybCAmJiBmaWxlc1RvVXBsb2FkTnVtICE9PSAwKSB7XG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZUNvdW50ZXIgKz0gZmlsZXNUb1VwbG9hZE51bTtcbiAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2U7XG4gICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcywgZmlsZXNUb1VwbG9hZE51bSk7XG4gIH1cblxuICBvbkZpbGVPdmVyID0gKGlzT3ZlcikgPT4gdGhpcy5maWxlT3ZlciA9IGlzT3ZlcjtcblxuICBwcml2YXRlIG9uUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+LCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyKSB7XG4gICAgZmlsZUhvbGRlci5zZXJ2ZXJSZXNwb25zZSA9IHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlIH07XG4gICAgZmlsZUhvbGRlci5wZW5kaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnVwbG9hZEZpbmlzaGVkLmVtaXQoZmlsZUhvbGRlcik7XG5cbiAgICBpZiAoLS10aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIgPT09IDApIHtcbiAgICAgIHRoaXMudXBsb2FkU3RhdGVDaGFuZ2VkLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1VwbG9hZGVkRmlsZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMudXBsb2FkZWRGaWxlc1tpXTtcblxuICAgICAgbGV0IGZpbGVCbG9iOiBCbG9iLFxuICAgICAgICBmaWxlOiBGaWxlLFxuICAgICAgICBmaWxlVXJsOiBzdHJpbmc7XG5cbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGZpbGVVcmwgPSBkYXRhLnVybDtcbiAgICAgICAgZmlsZUJsb2IgPSAoZGF0YS5ibG9iKSA/IGRhdGEuYmxvYiA6IG5ldyBCbG9iKFtkYXRhXSk7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBkYXRhLmZpbGVOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVVcmwgPSBkYXRhO1xuICAgICAgICBmaWxlQmxvYiA9IG5ldyBCbG9iKFtmaWxlVXJsXSk7XG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBmaWxlVXJsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlcy5wdXNoKG5ldyBGaWxlSG9sZGVyKGZpbGVVcmwsIGZpbGUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHVwbG9hZEZpbGVzKGZpbGVzOiBGaWxlTGlzdCwgZmlsZXNUb1VwbG9hZE51bTogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc1RvVXBsb2FkTnVtOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgaWYgKHRoaXMubWF4RmlsZVNpemUgJiYgZmlsZS5zaXplID4gdGhpcy5tYXhGaWxlU2l6ZSkge1xuICAgICAgICB0aGlzLmZpbGVDb3VudGVyLS07XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5zaG93RmlsZVRvb0xhcmdlTWVzc2FnZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXBsb2FkU3RhdGVDaGFuZ2VkLmVtaXQoZmFsc2UpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmVmb3JlVXBsb2FkUmVzdWx0OiBVcGxvYWRNZXRhZGF0YSA9IGF3YWl0IHRoaXMuYmVmb3JlVXBsb2FkKHsgZmlsZSwgdXJsOiB0aGlzLnVybCwgYWJvcnQ6IGZhbHNlIH0pO1xuXG4gICAgICBpZiAoYmVmb3JlVXBsb2FkUmVzdWx0LmFib3J0KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvdW50ZXItLTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIgPSBuZXcgRmlsZUhvbGRlcihldmVudC50YXJnZXQucmVzdWx0LCBiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XG4gICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlSG9sZGVyKTtcbiAgICAgICAgdGhpcy51cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXIsIGJlZm9yZVVwbG9hZFJlc3VsdC51cmwsIGJlZm9yZVVwbG9hZFJlc3VsdC5mb3JtRGF0YSk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIsIHVybCA9IHRoaXMudXJsLCBjdXN0b21Gb3JtPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIrKztcbiAgICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlXG4gICAgICAgIC51cGxvYWRJbWFnZSh1cmwsIGZpbGVIb2xkZXIuZmlsZSwgdGhpcy5oZWFkZXJzLCB0aGlzLnBhcnROYW1lLCBjdXN0b21Gb3JtLCB0aGlzLndpdGhDcmVkZW50aWFscylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXNwb25zZSA9PiB0aGlzLm9uUmVzcG9uc2UocmVzcG9uc2UsIGZpbGVIb2xkZXIpLFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMub25SZXNwb25zZShlcnJvciwgZmlsZUhvbGRlcik7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGUoZmlsZUhvbGRlcik7XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW1hZ2VVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9pbWFnZS11cGxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW1hZ2VVcGxvYWRDb21wb25lbnQsXG4gICAgRmlsZURyb3BEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW0ltYWdlVXBsb2FkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW1hZ2VVcGxvYWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtJbWFnZVVwbG9hZFNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBRUE7UUFLWSxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUQsYUFBUSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO0tBK0UzRTs7Ozs7SUE3RWdCLGlDQUFlOzs7O0lBQTlCLFVBQStCLEtBQVU7UUFDdkMsT0FBTyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7S0FDbkY7Ozs7O0lBRWMsMEJBQVE7Ozs7SUFBdkIsVUFBd0IsS0FBVTtRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRWMsMkJBQVM7Ozs7O0lBQXhCLFVBQXlCLElBQVksRUFBRSxTQUFpQjtRQUN0RCxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDM0U7Ozs7O0lB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

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

module.exports = __webpack_require__(/*! /Users/aberezkin/Projects/ng2-image-upload/projects/ng2-image-upload-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map