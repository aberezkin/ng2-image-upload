(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular2-image-upload', ['exports', '@angular/common', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['angular2-image-upload'] = {}),global.ng.common,global.ng.common.http,global.ng.core));
}(this, (function (exports,common,http,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileDropDirective = /** @class */ (function () {
        function FileDropDirective() {
            this.fileOver = new core.EventEmitter();
            this.fileDrop = new core.EventEmitter();
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        FileDropDirective.getDataTransfer = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
            };
        /**
         * @private
         * @param {?} types
         * @return {?}
         */
        FileDropDirective.hasFiles = /**
         * @private
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
         * @private
         * @param {?} rule
         * @param {?} candidate
         * @return {?}
         */
        FileDropDirective.matchRule = /**
         * @private
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
         * @private
         * @param {?} files
         * @return {?}
         */
        FileDropDirective.prototype.filterFiles = /**
         * @private
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
            { type: core.Directive, args: [{
                        selector: '[fileDrop]'
                    },] }
        ];
        FileDropDirective.propDecorators = {
            accept: [{ type: core.Input }],
            fileOver: [{ type: core.Output }],
            fileDrop: [{ type: core.Output }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }]
        };
        return FileDropDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageUploadService = /** @class */ (function () {
        function ImageUploadService(http$$1) {
            this.http = http$$1;
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
                if (partName === void 0) {
                    partName = 'image';
                }
                var e_1, _a;
                if (!url || url === '') {
                    throw new Error('Url is not set! Please set it before doing queries');
                }
                /** @type {?} */
                var formData = new FormData();
                if (customFormData) {
                    try {
                        for (var _b = __values(Object.keys(customFormData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var key = _c.value;
                            formData.append(key, customFormData[key]);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                formData.append(partName, image);
                return this.http.post(url, formData, { withCredentials: withCredentials, headers: headers, observe: 'response' });
            };
        ImageUploadService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ImageUploadService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        return ImageUploadService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageUploadComponent = /** @class */ (function () {
        function ImageUploadComponent(imageService) {
            var _this = this;
            this.imageService = imageService;
            this.files = [];
            this.fileCounter = 0;
            this.fileOver = false;
            this.showFileTooLargeMessage = false;
            this.beforeUpload = ( /**
             * @param {?} metadata
             * @return {?}
             */function (metadata) { return metadata; });
            this.buttonCaption = 'Select Images';
            this.disabled = false;
            this.cssClass = 'img-ul';
            this.clearButtonCaption = 'Clear';
            this.dropBoxMessage = 'Drop your images here!';
            this.dropBoxClickable = false;
            this.max = 100;
            this.preview = true;
            this.withCredentials = false;
            this.uploadedFiles = [];
            this.removed = new core.EventEmitter();
            this.uploadStateChanged = new core.EventEmitter();
            this.uploadFinished = new core.EventEmitter();
            this.previewClicked = new core.EventEmitter();
            this.pendingFilesCounter = 0;
            this.onFileOver = ( /**
             * @param {?} isOver
             * @return {?}
             */function (isOver) { return (_this.fileOver = isOver); });
        }
        /**
         * @return {?}
         */
        ImageUploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.fileTooLargeMessage) {
                    this.fileTooLargeMessage =
                        'An image was too large and was not uploaded.' +
                            (this.maxFileSize ? ' The maximum file size is ' + this.maxFileSize / 1024 + 'KiB.' : '');
                }
                this.supportedExtensions = this.supportedExtensions
                    ? this.supportedExtensions.map(( /**
                     * @param {?} ext
                     * @return {?}
                     */function (ext) { return 'image/' + ext; }))
                    : ['image/*'];
            };
        /**
         * @return {?}
         */
        ImageUploadComponent.prototype.deleteAll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.files.forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return _this.removed.emit(f); }));
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
         * @private
         * @param {?} response
         * @param {?} fileHolder
         * @return {?}
         */
        ImageUploadComponent.prototype.onResponse = /**
         * @private
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
         * @private
         * @return {?}
         */
        ImageUploadComponent.prototype.processUploadedFiles = /**
         * @private
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
                        fileBlob = data.blob ? data.blob : new Blob([data]);
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
         * @private
         * @param {?} files
         * @param {?} filesToUploadNum
         * @return {?}
         */
        ImageUploadComponent.prototype.uploadFiles = /**
         * @private
         * @param {?} files
         * @param {?} filesToUploadNum
         * @return {?}
         */
            function (files, filesToUploadNum) {
                return __awaiter(this, void 0, void 0, function () {
                    var _loop_1, this_1, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _loop_1 = function (i) {
                                    var file, beforeUploadResult, img, reader;
                                    return __generator(this, function (_a) {
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
                                                return [4 /*yield*/, this_1.beforeUpload({
                                                        file: file,
                                                        url: this_1.url,
                                                        abort: false
                                                    })];
                                            case 1:
                                                beforeUploadResult = _a.sent();
                                                if (beforeUploadResult.abort) {
                                                    this_1.fileCounter--;
                                                    this_1.inputElement.nativeElement.value = '';
                                                    return [2 /*return*/, "continue"];
                                                }
                                                img = ( /** @type {?} */(document.createElement('img')));
                                                img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                                reader = new FileReader();
                                                reader.addEventListener('load', ( /**
                                                 * @param {?} event
                                                 * @return {?}
                                                 */function (event) {
                                                    /** @type {?} */
                                                    var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                                    _this.files.push(fileHolder);
                                                    _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                                }), false);
                                                reader.readAsDataURL(beforeUploadResult.file);
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                this_1 = this;
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < filesToUploadNum))
                                    return [3 /*break*/, 4];
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
         * @private
         * @param {?} fileHolder
         * @param {?=} url
         * @param {?=} customForm
         * @return {?}
         */
        ImageUploadComponent.prototype.uploadSingleFile = /**
         * @private
         * @param {?} fileHolder
         * @param {?=} url
         * @param {?=} customForm
         * @return {?}
         */
            function (fileHolder, url, customForm) {
                var _this = this;
                if (url === void 0) {
                    url = this.url;
                }
                if (url) {
                    this.pendingFilesCounter++;
                    fileHolder.pending = true;
                    this.imageService
                        .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                        .subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) { return _this.onResponse(response, fileHolder); }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        _this.onResponse(error, fileHolder);
                        _this.deleteFile(fileHolder);
                    }));
                }
                else {
                    this.uploadFinished.emit(fileHolder);
                }
            };
        ImageUploadComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'image-upload',
                        template: "<div fileDrop\n     [accept]=\"supportedExtensions\"\n     (fileOver)=\"onFileOver($event)\"\n     (fileDrop)=\"onFileChange($event)\"\n     [ngClass]=\"cssClass\"\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"\n     [ngStyle]=\"style?.layout\">\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">\n    <label *ngIf=\"fileCounter != max\"\n           class=\"img-ul-upload img-ul-button\"\n           [ngStyle]=\"style?.selectButton\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\">\n      <span [innerText]=\"buttonCaption\"></span>\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <button *ngIf=\"fileCounter > 0\"\n            [disabled]=\"disabled\"\n            class=\"img-ul-clear img-ul-button\"\n            (click)=\"deleteAll()\"\n            [ngStyle]=\"style?.clearButton\"\n            [innerText]=\"clearButtonCaption\">\n    </button>\n    <label *ngIf=\"dropBoxClickable && fileCounter != max\"\n           class=\"img-ul-drag-box-msg\">\n      {{dropBoxMessage}}\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <div *ngIf=\"!dropBoxClickable\"\n         class=\"img-ul-drag-box-msg\"\n         [innerText]=\"dropBoxMessage\"></div>\n\n  </div>\n  <p class=\"img-ul-file-too-large\"\n     *ngIf=\"showFileTooLargeMessage\"\n     [innerText]=\"fileTooLargeMessage\"></p>\n\n  <div *ngIf=\"preview\"\n       class=\"img-ul-container img-ul-hr-inline-group\"\n       [ngStyle]=\"style?.previewPanel\">\n    <div class=\"img-ul-image\"\n         *ngFor=\"let file of files\"\n         (click)=\"previewFileClicked(file)\"\n         [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\">\n      <div *ngIf=\"file.pending\"\n           class=\"img-ul-loading-overlay\">\n        <div class=\"img-ul-spinning-circle\"></div>\n      </div>\n      <div *ngIf=\"!file.pending\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\"\n           class=\"img-ul-x-mark\"\n           (click)=\"deleteFile(file)\">\n        <span class=\"img-ul-close\"></span>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}label.img-ul-drag-box-msg input[type=file]{display:none}.dropbox-class{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        ImageUploadComponent.ctorParameters = function () {
            return [
                { type: ImageUploadService }
            ];
        };
        ImageUploadComponent.propDecorators = {
            beforeUpload: [{ type: core.Input }],
            buttonCaption: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            cssClass: [{ type: core.Input, args: ['class',] }],
            clearButtonCaption: [{ type: core.Input }],
            dropBoxMessage: [{ type: core.Input }],
            fileTooLargeMessage: [{ type: core.Input }],
            headers: [{ type: core.Input }],
            dropBoxClickable: [{ type: core.Input }],
            max: [{ type: core.Input }],
            maxFileSize: [{ type: core.Input }],
            preview: [{ type: core.Input }],
            partName: [{ type: core.Input }],
            style: [{ type: core.Input }],
            supportedExtensions: [{ type: core.Input, args: ['extensions',] }],
            url: [{ type: core.Input }],
            withCredentials: [{ type: core.Input }],
            uploadedFiles: [{ type: core.Input }],
            removed: [{ type: core.Output }],
            uploadStateChanged: [{ type: core.Output }],
            uploadFinished: [{ type: core.Output }],
            previewClicked: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['input',] }]
        };
        return ImageUploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ImageUploadModule = ImageUploadModule;
    exports.ImageUploadComponent = ImageUploadComponent;
    exports.FileHolder = FileHolder;
    exports.ɵb = FileDropDirective;
    exports.ɵa = ImageUploadService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular2-image-upload.umd.js.map