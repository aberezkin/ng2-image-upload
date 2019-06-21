/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileHolder } from '../file-holder';
import { ImageUploadService } from '../image-upload.service';
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = (/**
         * @param {?} metadata
         * @return {?}
         */
        function (metadata) { return metadata; });
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
        this.removed = new EventEmitter();
        this.uploadStateChanged = new EventEmitter();
        this.uploadFinished = new EventEmitter();
        this.previewClicked = new EventEmitter();
        this.pendingFilesCounter = 0;
        this.onFileOver = (/**
         * @param {?} isOver
         * @return {?}
         */
        function (isOver) { return (_this.fileOver = isOver); });
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
            ? this.supportedExtensions.map((/**
             * @param {?} ext
             * @return {?}
             */
            function (ext) { return 'image/' + ext; }))
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
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return _this.removed.emit(f); }));
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, i;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var file, beforeUploadResult, img, reader;
                            return tslib_1.__generator(this, function (_a) {
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
                                        img = (/** @type {?} */ (document.createElement('img')));
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', (/**
                                         * @param {?} event
                                         * @return {?}
                                         */
                                        function (event) {
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
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.onResponse(response, fileHolder); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            }));
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    ImageUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'image-upload',
                    template: "<div fileDrop\n     [accept]=\"supportedExtensions\"\n     (fileOver)=\"onFileOver($event)\"\n     (fileDrop)=\"onFileChange($event)\"\n     [ngClass]=\"cssClass\"\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"\n     [ngStyle]=\"style?.layout\">\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">\n    <label *ngIf=\"fileCounter != max\"\n           class=\"img-ul-upload img-ul-button\"\n           [ngStyle]=\"style?.selectButton\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\">\n      <span [innerText]=\"buttonCaption\"></span>\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <button *ngIf=\"fileCounter > 0\"\n            [disabled]=\"disabled\"\n            class=\"img-ul-clear img-ul-button\"\n            (click)=\"deleteAll()\"\n            [ngStyle]=\"style?.clearButton\"\n            [innerText]=\"clearButtonCaption\">\n    </button>\n    <label *ngIf=\"dropBoxClickable && fileCounter != max\"\n           class=\"img-ul-drag-box-msg\">\n      {{dropBoxMessage}}\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <div *ngIf=\"!dropBoxClickable\"\n         class=\"img-ul-drag-box-msg\"\n         [innerText]=\"dropBoxMessage\"></div>\n\n  </div>\n  <p class=\"img-ul-file-too-large\"\n     *ngIf=\"showFileTooLargeMessage\"\n     [innerText]=\"fileTooLargeMessage\"></p>\n\n  <div *ngIf=\"preview\"\n       class=\"img-ul-container img-ul-hr-inline-group\"\n       [ngStyle]=\"style?.previewPanel\">\n    <div class=\"img-ul-image\"\n         *ngFor=\"let file of files\"\n         (click)=\"previewFileClicked(file)\"\n         [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\">\n      <div *ngIf=\"file.pending\"\n           class=\"img-ul-loading-overlay\">\n        <div class=\"img-ul-spinning-circle\"></div>\n      </div>\n      <div *ngIf=\"!file.pending\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\"\n           class=\"img-ul-x-mark\"\n           (click)=\"deleteFile(file)\">\n        <span class=\"img-ul-close\"></span>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}label.img-ul-drag-box-msg input[type=file]{display:none}.dropbox-class{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    ImageUploadComponent.ctorParameters = function () { return [
        { type: ImageUploadService }
    ]; };
    ImageUploadComponent.propDecorators = {
        beforeUpload: [{ type: Input }],
        buttonCaption: [{ type: Input }],
        disabled: [{ type: Input }],
        cssClass: [{ type: Input, args: ['class',] }],
        clearButtonCaption: [{ type: Input }],
        dropBoxMessage: [{ type: Input }],
        fileTooLargeMessage: [{ type: Input }],
        headers: [{ type: Input }],
        dropBoxClickable: [{ type: Input }],
        max: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        preview: [{ type: Input }],
        partName: [{ type: Input }],
        style: [{ type: Input }],
        supportedExtensions: [{ type: Input, args: ['extensions',] }],
        url: [{ type: Input }],
        withCredentials: [{ type: Input }],
        uploadedFiles: [{ type: Input }],
        removed: [{ type: Output }],
        uploadStateChanged: [{ type: Output }],
        uploadFinished: [{ type: Output }],
        previewClicked: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['input',] }]
    };
    return ImageUploadComponent;
}());
export { ImageUploadComponent };
if (false) {
    /** @type {?} */
    ImageUploadComponent.prototype.files;
    /** @type {?} */
    ImageUploadComponent.prototype.fileCounter;
    /** @type {?} */
    ImageUploadComponent.prototype.fileOver;
    /** @type {?} */
    ImageUploadComponent.prototype.showFileTooLargeMessage;
    /** @type {?} */
    ImageUploadComponent.prototype.beforeUpload;
    /** @type {?} */
    ImageUploadComponent.prototype.buttonCaption;
    /** @type {?} */
    ImageUploadComponent.prototype.disabled;
    /** @type {?} */
    ImageUploadComponent.prototype.cssClass;
    /** @type {?} */
    ImageUploadComponent.prototype.clearButtonCaption;
    /** @type {?} */
    ImageUploadComponent.prototype.dropBoxMessage;
    /** @type {?} */
    ImageUploadComponent.prototype.fileTooLargeMessage;
    /** @type {?} */
    ImageUploadComponent.prototype.headers;
    /** @type {?} */
    ImageUploadComponent.prototype.dropBoxClickable;
    /** @type {?} */
    ImageUploadComponent.prototype.max;
    /** @type {?} */
    ImageUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    ImageUploadComponent.prototype.preview;
    /** @type {?} */
    ImageUploadComponent.prototype.partName;
    /** @type {?} */
    ImageUploadComponent.prototype.style;
    /** @type {?} */
    ImageUploadComponent.prototype.supportedExtensions;
    /** @type {?} */
    ImageUploadComponent.prototype.url;
    /** @type {?} */
    ImageUploadComponent.prototype.withCredentials;
    /** @type {?} */
    ImageUploadComponent.prototype.uploadedFiles;
    /** @type {?} */
    ImageUploadComponent.prototype.removed;
    /** @type {?} */
    ImageUploadComponent.prototype.uploadStateChanged;
    /** @type {?} */
    ImageUploadComponent.prototype.uploadFinished;
    /** @type {?} */
    ImageUploadComponent.prototype.previewClicked;
    /**
     * @type {?}
     * @private
     */
    ImageUploadComponent.prototype.inputElement;
    /**
     * @type {?}
     * @private
     */
    ImageUploadComponent.prototype.pendingFilesCounter;
    /** @type {?} */
    ImageUploadComponent.prototype.onFileOver;
    /**
     * @type {?}
     * @private
     */
    ImageUploadComponent.prototype.imageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFJNUQ7SUF3Q0UsOEJBQW9CLFlBQWdDO1FBQXBELGlCQUF3RDtRQUFwQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFsQ3BELFVBQUssR0FBaUIsRUFBRSxDQUFBO1FBQ3hCLGdCQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQTtRQUNoQiw0QkFBdUIsR0FBRyxLQUFLLENBQUE7UUFFdEIsaUJBQVk7Ozs7UUFFMkIsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUSxFQUFBO1FBQzNELGtCQUFhLEdBQUcsZUFBZSxDQUFBO1FBQy9CLGFBQVEsR0FBRyxLQUFLLENBQUE7UUFDVCxhQUFRLEdBQUcsUUFBUSxDQUFBO1FBQzFCLHVCQUFrQixHQUFHLE9BQU8sQ0FBQTtRQUM1QixtQkFBYyxHQUFHLHdCQUF3QixDQUFBO1FBR3pDLHFCQUFnQixHQUFHLEtBQUssQ0FBQTtRQUN4QixRQUFHLEdBQUcsR0FBRyxDQUFBO1FBRVQsWUFBTyxHQUFHLElBQUksQ0FBQTtRQUtkLG9CQUFlLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLGtCQUFhLEdBQXFFLEVBQUUsQ0FBQTtRQUNuRixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQTtRQUN4Qyx1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QXRNWSxvQkFBb0I7OztJQUMvQixxQ0FBd0I7O0lBQ3hCLDJDQUFlOztJQUNmLHdDQUFnQjs7SUFDaEIsdURBQStCOztJQUUvQiw0Q0FFb0U7O0lBQ3BFLDZDQUF3Qzs7SUFDeEMsd0NBQXlCOztJQUN6Qix3Q0FBbUM7O0lBQ25DLGtEQUFxQzs7SUFDckMsOENBQWtEOztJQUNsRCxtREFBb0M7O0lBQ3BDLHVDQUFxRTs7SUFDckUsZ0RBQWlDOztJQUNqQyxtQ0FBa0I7O0lBQ2xCLDJDQUE0Qjs7SUFDNUIsdUNBQXVCOztJQUN2Qix3Q0FBeUI7O0lBQ3pCLHFDQUFxQjs7SUFDckIsbURBQWtEOztJQUNsRCxtQ0FBb0I7O0lBQ3BCLCtDQUFnQzs7SUFDaEMsNkNBQTZGOztJQUM3Rix1Q0FBa0Q7O0lBQ2xELGtEQUEwRDs7SUFDMUQsOENBQXlEOztJQUN6RCw4Q0FBeUQ7Ozs7O0lBRXpELDRDQUNnQzs7Ozs7SUFDaEMsbURBQStCOztJQTJEL0IsMENBQStDOzs7OztJQXpEbkMsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEZpbGVIb2xkZXIgfSBmcm9tICcuLi9maWxlLWhvbGRlcidcbmltcG9ydCB7IEltYWdlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICcuLi9zdHlsZSdcbmltcG9ydCB7IFVwbG9hZE1ldGFkYXRhIH0gZnJvbSAnLi4vdXBsb2FkLW1ldGFkYXRhJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgZmlsZXM6IEZpbGVIb2xkZXJbXSA9IFtdXG4gIGZpbGVDb3VudGVyID0gMFxuICBmaWxlT3ZlciA9IGZhbHNlXG4gIHNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gZmFsc2VcblxuICBASW5wdXQoKSBiZWZvcmVVcGxvYWQ6IChcbiAgICBtZXRhZGF0YTogVXBsb2FkTWV0YWRhdGFcbiAgKSA9PiBVcGxvYWRNZXRhZGF0YSB8IFByb21pc2U8VXBsb2FkTWV0YWRhdGE+ID0gbWV0YWRhdGEgPT4gbWV0YWRhdGFcbiAgQElucHV0KCkgYnV0dG9uQ2FwdGlvbiA9ICdTZWxlY3QgSW1hZ2VzJ1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlXG4gIEBJbnB1dCgnY2xhc3MnKSBjc3NDbGFzcyA9ICdpbWctdWwnXG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uQ2FwdGlvbiA9ICdDbGVhcidcbiAgQElucHV0KCkgZHJvcEJveE1lc3NhZ2UgPSAnRHJvcCB5b3VyIGltYWdlcyBoZXJlISdcbiAgQElucHV0KCkgZmlsZVRvb0xhcmdlTWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGhlYWRlcnM6IEh0dHBIZWFkZXJzIHwgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfVxuICBASW5wdXQoKSBkcm9wQm94Q2xpY2thYmxlID0gZmFsc2VcbiAgQElucHV0KCkgbWF4ID0gMTAwXG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiBudW1iZXJcbiAgQElucHV0KCkgcHJldmlldyA9IHRydWVcbiAgQElucHV0KCkgcGFydE5hbWU6IHN0cmluZ1xuICBASW5wdXQoKSBzdHlsZTogU3R5bGVcbiAgQElucHV0KCdleHRlbnNpb25zJykgc3VwcG9ydGVkRXh0ZW5zaW9uczogc3RyaW5nW11cbiAgQElucHV0KCkgdXJsOiBzdHJpbmdcbiAgQElucHV0KCkgd2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgQElucHV0KCkgdXBsb2FkZWRGaWxlczogc3RyaW5nW10gfCBBcnJheTx7IHVybDogc3RyaW5nOyBmaWxlTmFtZTogc3RyaW5nOyBibG9iPzogQmxvYiB9PiA9IFtdXG4gIEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpXG4gIEBPdXRwdXQoKSB1cGxvYWRTdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KClcbiAgQE91dHB1dCgpIHVwbG9hZEZpbmlzaGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpXG4gIEBPdXRwdXQoKSBwcmV2aWV3Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUhvbGRlcj4oKVxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JylcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgcHJpdmF0ZSBwZW5kaW5nRmlsZXNDb3VudGVyID0gMFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVVwbG9hZFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGVUb29MYXJnZU1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSA9XG4gICAgICAgICdBbiBpbWFnZSB3YXMgdG9vIGxhcmdlIGFuZCB3YXMgbm90IHVwbG9hZGVkLicgK1xuICAgICAgICAodGhpcy5tYXhGaWxlU2l6ZSA/ICcgVGhlIG1heGltdW0gZmlsZSBzaXplIGlzICcgKyB0aGlzLm1heEZpbGVTaXplIC8gMTAyNCArICdLaUIuJyA6ICcnKVxuICAgIH1cbiAgICB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnMgPSB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnNcbiAgICAgID8gdGhpcy5zdXBwb3J0ZWRFeHRlbnNpb25zLm1hcChleHQgPT4gJ2ltYWdlLycgKyBleHQpXG4gICAgICA6IFsnaW1hZ2UvKiddXG4gIH1cblxuICBkZWxldGVBbGwoKSB7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKGYgPT4gdGhpcy5yZW1vdmVkLmVtaXQoZikpXG4gICAgdGhpcy5maWxlcyA9IFtdXG4gICAgdGhpcy5maWxlQ291bnRlciA9IDBcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUZpbGUoZmlsZTogRmlsZUhvbGRlcik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5pbmRleE9mKGZpbGUpXG4gICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5maWxlQ291bnRlci0tXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJydcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVkLmVtaXQoZmlsZSlcbiAgfVxuXG4gIHByZXZpZXdGaWxlQ2xpY2tlZChmaWxlOiBGaWxlSG9sZGVyKSB7XG4gICAgdGhpcy5wcmV2aWV3Q2xpY2tlZC5lbWl0KGZpbGUpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudXBsb2FkZWRGaWxlcyAmJiBjaGFuZ2VzLnVwbG9hZGVkRmlsZXMuY3VycmVudFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvY2Vzc1VwbG9hZGVkRmlsZXMoKVxuICAgIH1cbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShmaWxlczogRmlsZUxpc3QpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCByZW1haW5pbmdTbG90cyA9IHRoaXMubWF4IC0gdGhpcy5maWxlQ291bnRlclxuICAgIGNvbnN0IGZpbGVzVG9VcGxvYWROdW0gPSBmaWxlcy5sZW5ndGggPiByZW1haW5pbmdTbG90cyA/IHJlbWFpbmluZ1Nsb3RzIDogZmlsZXMubGVuZ3RoXG5cbiAgICBpZiAodGhpcy51cmwgJiYgZmlsZXNUb1VwbG9hZE51bSAhPT0gMCkge1xuICAgICAgdGhpcy51cGxvYWRTdGF0ZUNoYW5nZWQuZW1pdCh0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuZmlsZUNvdW50ZXIgKz0gZmlsZXNUb1VwbG9hZE51bVxuICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZVxuICAgIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMsIGZpbGVzVG9VcGxvYWROdW0pXG4gIH1cblxuICBvbkZpbGVPdmVyID0gaXNPdmVyID0+ICh0aGlzLmZpbGVPdmVyID0gaXNPdmVyKVxuXG4gIHByaXZhdGUgb25SZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sIGZpbGVIb2xkZXI6IEZpbGVIb2xkZXIpIHtcbiAgICBmaWxlSG9sZGVyLnNlcnZlclJlc3BvbnNlID0geyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UgfVxuICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IGZhbHNlXG5cbiAgICB0aGlzLnVwbG9hZEZpbmlzaGVkLmVtaXQoZmlsZUhvbGRlcilcblxuICAgIGlmICgtLXRoaXMucGVuZGluZ0ZpbGVzQ291bnRlciA9PT0gMCkge1xuICAgICAgdGhpcy51cGxvYWRTdGF0ZUNoYW5nZWQuZW1pdChmYWxzZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NVcGxvYWRlZEZpbGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGxvYWRlZEZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB0aGlzLnVwbG9hZGVkRmlsZXNbaV1cblxuICAgICAgbGV0IGZpbGVCbG9iOiBCbG9iLCBmaWxlOiBGaWxlLCBmaWxlVXJsOiBzdHJpbmdcblxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgZmlsZVVybCA9IGRhdGEudXJsXG4gICAgICAgIGZpbGVCbG9iID0gZGF0YS5ibG9iID8gZGF0YS5ibG9iIDogbmV3IEJsb2IoW2RhdGFdKVxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZGF0YS5maWxlTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVVcmwgPSBkYXRhXG4gICAgICAgIGZpbGVCbG9iID0gbmV3IEJsb2IoW2ZpbGVVcmxdKVxuICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2ZpbGVCbG9iXSwgZmlsZVVybClcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlcy5wdXNoKG5ldyBGaWxlSG9sZGVyKGZpbGVVcmwsIGZpbGUpKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkRmlsZXMoZmlsZXM6IEZpbGVMaXN0LCBmaWxlc1RvVXBsb2FkTnVtOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzVG9VcGxvYWROdW07IGkrKykge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldXG5cbiAgICAgIGlmICh0aGlzLm1heEZpbGVTaXplICYmIGZpbGUuc2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJ1xuICAgICAgICB0aGlzLnNob3dGaWxlVG9vTGFyZ2VNZXNzYWdlID0gdHJ1ZVxuICAgICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBiZWZvcmVVcGxvYWRSZXN1bHQ6IFVwbG9hZE1ldGFkYXRhID0gYXdhaXQgdGhpcy5iZWZvcmVVcGxvYWQoe1xuICAgICAgICBmaWxlLFxuICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICBhYm9ydDogZmFsc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChiZWZvcmVVcGxvYWRSZXN1bHQuYWJvcnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ291bnRlci0tXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJ1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGUpXG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnbG9hZCcsXG4gICAgICAgIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUhvbGRlcjogRmlsZUhvbGRlciA9IG5ldyBGaWxlSG9sZGVyKFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlXG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXMuZmlsZXMucHVzaChmaWxlSG9sZGVyKVxuICAgICAgICAgIHRoaXMudXBsb2FkU2luZ2xlRmlsZShmaWxlSG9sZGVyLCBiZWZvcmVVcGxvYWRSZXN1bHQudXJsLCBiZWZvcmVVcGxvYWRSZXN1bHQuZm9ybURhdGEpXG4gICAgICAgIH0sXG4gICAgICAgIGZhbHNlXG4gICAgICApXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZFNpbmdsZUZpbGUoXG4gICAgZmlsZUhvbGRlcjogRmlsZUhvbGRlcixcbiAgICB1cmwgPSB0aGlzLnVybCxcbiAgICBjdXN0b21Gb3JtPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbiAgKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy5wZW5kaW5nRmlsZXNDb3VudGVyKytcbiAgICAgIGZpbGVIb2xkZXIucGVuZGluZyA9IHRydWVcblxuICAgICAgdGhpcy5pbWFnZVNlcnZpY2VcbiAgICAgICAgLnVwbG9hZEltYWdlKFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBmaWxlSG9sZGVyLmZpbGUsXG4gICAgICAgICAgdGhpcy5oZWFkZXJzLFxuICAgICAgICAgIHRoaXMucGFydE5hbWUsXG4gICAgICAgICAgY3VzdG9tRm9ybSxcbiAgICAgICAgICB0aGlzLndpdGhDcmVkZW50aWFsc1xuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5vblJlc3BvbnNlKHJlc3BvbnNlLCBmaWxlSG9sZGVyKSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uUmVzcG9uc2UoZXJyb3IsIGZpbGVIb2xkZXIpXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZpbGUoZmlsZUhvbGRlcilcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGxvYWRGaW5pc2hlZC5lbWl0KGZpbGVIb2xkZXIpXG4gICAgfVxuICB9XG59XG4iXX0=