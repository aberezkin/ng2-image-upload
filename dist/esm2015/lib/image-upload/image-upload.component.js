/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileHolder } from '../file-holder';
import { ImageUploadService } from '../image-upload.service';
export class ImageUploadComponent {
    /**
     * @param {?} imageService
     */
    constructor(imageService) {
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = (/**
         * @param {?} metadata
         * @return {?}
         */
        metadata => metadata);
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
        isOver => (this.fileOver = isOver));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            ext => 'image/' + ext))
            : ['image/*'];
    }
    /**
     * @return {?}
     */
    deleteAll() {
        this.files.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => this.removed.emit(f)));
        this.files = [];
        this.fileCounter = 0;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    deleteFile(file) {
        /** @type {?} */
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.removed.emit(file);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    previewFileClicked(file) {
        this.previewClicked.emit(file);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    onFileChange(files) {
        if (this.disabled)
            return;
        /** @type {?} */
        const remainingSlots = this.max - this.fileCounter;
        /** @type {?} */
        const filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum !== 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    }
    /**
     * @private
     * @param {?} response
     * @param {?} fileHolder
     * @return {?}
     */
    onResponse(response, fileHolder) {
        fileHolder.serverResponse = { status: response.status, response };
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter === 0) {
            this.uploadStateChanged.emit(false);
        }
    }
    /**
     * @private
     * @return {?}
     */
    processUploadedFiles() {
        for (let i = 0; i < this.uploadedFiles.length; i++) {
            /** @type {?} */
            const data = this.uploadedFiles[i];
            /** @type {?} */
            let fileBlob;
            /** @type {?} */
            let file;
            /** @type {?} */
            let fileUrl;
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
    }
    /**
     * @private
     * @param {?} files
     * @param {?} filesToUploadNum
     * @return {?}
     */
    uploadFiles(files, filesToUploadNum) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < filesToUploadNum; i++) {
                /** @type {?} */
                const file = files[i];
                if (this.maxFileSize && file.size > this.maxFileSize) {
                    this.fileCounter--;
                    this.inputElement.nativeElement.value = '';
                    this.showFileTooLargeMessage = true;
                    this.uploadStateChanged.emit(false);
                    continue;
                }
                /** @type {?} */
                const beforeUploadResult = yield this.beforeUpload({
                    file,
                    url: this.url,
                    abort: false
                });
                if (beforeUploadResult.abort) {
                    this.fileCounter--;
                    this.inputElement.nativeElement.value = '';
                    continue;
                }
                /** @type {?} */
                const img = (/** @type {?} */ (document.createElement('img')));
                img.src = window.URL.createObjectURL(beforeUploadResult.file);
                /** @type {?} */
                const reader = new FileReader();
                reader.addEventListener('load', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    /** @type {?} */
                    const fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                    this.files.push(fileHolder);
                    this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                }), false);
                reader.readAsDataURL(beforeUploadResult.file);
            }
        });
    }
    /**
     * @private
     * @param {?} fileHolder
     * @param {?=} url
     * @param {?=} customForm
     * @return {?}
     */
    uploadSingleFile(fileHolder, url = this.url, customForm) {
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .uploadImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => this.onResponse(response, fileHolder)), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.onResponse(error, fileHolder);
                this.deleteFile(fileHolder);
            }));
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    }
}
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-upload',
                template: "<div fileDrop\n     [accept]=\"supportedExtensions\"\n     (fileOver)=\"onFileOver($event)\"\n     (fileDrop)=\"onFileChange($event)\"\n     [ngClass]=\"cssClass\"\n     [ngClass]=\"{'img-ul-file-is-over': fileOver}\"\n     [ngStyle]=\"style?.layout\">\n  <div class=\"img-ul-file-upload img-ul-hr-inline-group\">\n    <label *ngIf=\"fileCounter != max\"\n           class=\"img-ul-upload img-ul-button\"\n           [ngStyle]=\"style?.selectButton\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\">\n      <span [innerText]=\"buttonCaption\"></span>\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <button *ngIf=\"fileCounter > 0\"\n            [disabled]=\"disabled\"\n            class=\"img-ul-clear img-ul-button\"\n            (click)=\"deleteAll()\"\n            [ngStyle]=\"style?.clearButton\"\n            [innerText]=\"clearButtonCaption\">\n    </button>\n    <label *ngIf=\"dropBoxClickable && fileCounter != max\"\n           class=\"img-ul-drag-box-msg\">\n      {{dropBoxMessage}}\n      <input type=\"file\"\n             [disabled]=\"disabled\"\n             [accept]=\"supportedExtensions\"\n             multiple\n             (change)=\"onFileChange(input.files)\"\n             #input>\n    </label>\n    <div *ngIf=\"!dropBoxClickable\"\n         class=\"img-ul-drag-box-msg\"\n         [innerText]=\"dropBoxMessage\"></div>\n\n  </div>\n  <p class=\"img-ul-file-too-large\"\n     *ngIf=\"showFileTooLargeMessage\"\n     [innerText]=\"fileTooLargeMessage\"></p>\n\n  <div *ngIf=\"preview\"\n       class=\"img-ul-container img-ul-hr-inline-group\"\n       [ngStyle]=\"style?.previewPanel\">\n    <div class=\"img-ul-image\"\n         *ngFor=\"let file of files\"\n         (click)=\"previewFileClicked(file)\"\n         [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\">\n      <div *ngIf=\"file.pending\"\n           class=\"img-ul-loading-overlay\">\n        <div class=\"img-ul-spinning-circle\"></div>\n      </div>\n      <div *ngIf=\"!file.pending\"\n           [ngClass]=\"{'img-ul-disabled': disabled}\"\n           class=\"img-ul-x-mark\"\n           (click)=\"deleteFile(file)\">\n        <span class=\"img-ul-close\"></span>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".img-ul{--active-color:#3C9;--common-radius:3px;background-color:#f8f8f8;border-radius:var(--common-radius);border:1px dashed #d0d0d0;font-family:sans-serif;position:relative;color:#9b9b9b}.img-ul-file-is-over{border:var(--active-color) solid}.img-ul-hr-inline-group:after{clear:both;content:\"\";display:table}.img-ul-file-upload{padding:16px}.img-ul-drag-box-msg{display:inline-block;font-weight:600;margin-left:12px;padding-top:14px}label.img-ul-button input[type=file]{display:none;position:fixed;top:-99999px}label.img-ul-drag-box-msg input[type=file]{display:none}.dropbox-class{display:none;position:fixed;top:-99999px}.img-ul-clear{background-color:red}.img-ul-clear:disabled{background-color:#ff6464;cursor:default}.img-ul-upload{background-color:var(--active-color)}.img-ul-button{-moz-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);-webkit-box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);border:none;box-shadow:2px 2px 4px 0 rgba(148,148,148,.6);color:#fff;cursor:pointer;display:inline-block;float:left;font-size:1.25em;font-weight:500;padding:10px;text-transform:uppercase}.img-ul-button:active span{display:block;position:relative;top:1px}.img-ul-container{background-color:#fdfdfd;padding:0 10px}.img-ul-image{background:center center/contain no-repeat;display:inline-block;float:left;height:86px;margin:6px;position:relative;width:86px}.img-ul-x-mark{background-color:#000;border-radius:2px;color:#fff;cursor:pointer;float:right;height:20px;margin:2px;opacity:.7;text-align:center;width:20px}.img-ul-close{height:20px;opacity:.7;padding-right:3px;position:relative;width:20px}.img-ul-x-mark:hover .img-ul-close{opacity:1}.img-ul-close:after,.img-ul-close:before{background-color:#fff;border-radius:2px;content:'';height:15px;position:absolute;top:0;width:2px}.img-ul-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.img-ul-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.img-ul-x-mark.img-ul-disabled{display:none}.img-ul-loading-overlay{background-color:#000;bottom:0;left:0;opacity:.7;position:absolute;right:0;top:0}.img-ul-spinning-circle{height:30px;width:30px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;border:3px solid rgba(255,255,255,0);border-top:3px solid #fff;border-right:3px solid #fff;-webkit-animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner;animation:2s cubic-bezier(.085,.625,.855,.36) infinite spinner}.img-ul-file-too-large{color:red;padding:0 15px}.img-ul-upload.img-ul-disabled{background-color:#86e9c9;cursor:default}.img-ul-upload.img-ul-disabled:active span{top:0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
ImageUploadComponent.ctorParameters = () => [
    { type: ImageUploadService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFTNUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQW1DL0IsWUFBb0IsWUFBZ0M7UUFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBbENwRCxVQUFLLEdBQWlCLEVBQUUsQ0FBQTtRQUN4QixnQkFBVyxHQUFHLENBQUMsQ0FBQTtRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUE7UUFDaEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFBO1FBRXRCLGlCQUFZOzs7O1FBRTJCLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFBO1FBQzNELGtCQUFhLEdBQUcsZUFBZSxDQUFBO1FBQy9CLGFBQVEsR0FBRyxLQUFLLENBQUE7UUFDVCxhQUFRLEdBQUcsUUFBUSxDQUFBO1FBQzFCLHVCQUFrQixHQUFHLE9BQU8sQ0FBQTtRQUM1QixtQkFBYyxHQUFHLHdCQUF3QixDQUFBO1FBR3pDLHFCQUFnQixHQUFHLEtBQUssQ0FBQTtRQUN4QixRQUFHLEdBQUcsR0FBRyxDQUFBO1FBRVQsWUFBTyxHQUFHLElBQUksQ0FBQTtRQUtkLG9CQUFlLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLGtCQUFhLEdBQXFFLEVBQUUsQ0FBQTtRQUNuRixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQTtRQUN4Qyx1QkFB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Qix1Q0FBdUI7O0lBQ3ZCLHdDQUF5Qjs7SUFDekIscUNBQXFCOztJQUNyQixtREFBa0Q7O0lBQ2xELG1DQUFvQjs7SUFDcEIsK0NBQWdDOztJQUNoQyw2Q0FBNkY7O0lBQzdGLHVDQUFrRDs7SUFDbEQsa0RBQTBEOztJQUMxRCw4Q0FBeUQ7O0lBQ3pELDhDQUF5RDs7Ozs7SUFFekQsNENBQ2dDOzs7OztJQUNoQyxtREFBK0I7O0lBMkQvQiwwQ0FBK0M7Ozs7O0lBekRuQyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgRmlsZUhvbGRlciB9IGZyb20gJy4uL2ZpbGUtaG9sZGVyJ1xuaW1wb3J0IHsgSW1hZ2VVcGxvYWRTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2UtdXBsb2FkLnNlcnZpY2UnXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJy4uL3N0eWxlJ1xuaW1wb3J0IHsgVXBsb2FkTWV0YWRhdGEgfSBmcm9tICcuLi91cGxvYWQtbWV0YWRhdGEnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltYWdlLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBmaWxlczogRmlsZUhvbGRlcltdID0gW11cbiAgZmlsZUNvdW50ZXIgPSAwXG4gIGZpbGVPdmVyID0gZmFsc2VcbiAgc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSBmYWxzZVxuXG4gIEBJbnB1dCgpIGJlZm9yZVVwbG9hZDogKFxuICAgIG1ldGFkYXRhOiBVcGxvYWRNZXRhZGF0YVxuICApID0+IFVwbG9hZE1ldGFkYXRhIHwgUHJvbWlzZTxVcGxvYWRNZXRhZGF0YT4gPSBtZXRhZGF0YSA9PiBtZXRhZGF0YVxuICBASW5wdXQoKSBidXR0b25DYXB0aW9uID0gJ1NlbGVjdCBJbWFnZXMnXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2VcbiAgQElucHV0KCdjbGFzcycpIGNzc0NsYXNzID0gJ2ltZy11bCdcbiAgQElucHV0KCkgY2xlYXJCdXR0b25DYXB0aW9uID0gJ0NsZWFyJ1xuICBASW5wdXQoKSBkcm9wQm94TWVzc2FnZSA9ICdEcm9wIHlvdXIgaW1hZ2VzIGhlcmUhJ1xuICBASW5wdXQoKSBmaWxlVG9vTGFyZ2VNZXNzYWdlOiBzdHJpbmdcbiAgQElucHV0KCkgaGVhZGVyczogSHR0cEhlYWRlcnMgfCB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9XG4gIEBJbnB1dCgpIGRyb3BCb3hDbGlja2FibGUgPSBmYWxzZVxuICBASW5wdXQoKSBtYXggPSAxMDBcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlclxuICBASW5wdXQoKSBwcmV2aWV3ID0gdHJ1ZVxuICBASW5wdXQoKSBwYXJ0TmFtZTogc3RyaW5nXG4gIEBJbnB1dCgpIHN0eWxlOiBTdHlsZVxuICBASW5wdXQoJ2V4dGVuc2lvbnMnKSBzdXBwb3J0ZWRFeHRlbnNpb25zOiBzdHJpbmdbXVxuICBASW5wdXQoKSB1cmw6IHN0cmluZ1xuICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICBASW5wdXQoKSB1cGxvYWRlZEZpbGVzOiBzdHJpbmdbXSB8IEFycmF5PHsgdXJsOiBzdHJpbmc7IGZpbGVOYW1lOiBzdHJpbmc7IGJsb2I/OiBCbG9iIH0+ID0gW11cbiAgQE91dHB1dCgpIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KClcbiAgQE91dHB1dCgpIHVwbG9hZFN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuICBAT3V0cHV0KCkgdXBsb2FkRmluaXNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVIb2xkZXI+KClcbiAgQE91dHB1dCgpIHByZXZpZXdDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlSG9sZGVyPigpXG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZlxuICBwcml2YXRlIHBlbmRpbmdGaWxlc0NvdW50ZXIgPSAwXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlVXBsb2FkU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZVRvb0xhcmdlTWVzc2FnZSkge1xuICAgICAgdGhpcy5maWxlVG9vTGFyZ2VNZXNzYWdlID1cbiAgICAgICAgJ0FuIGltYWdlIHdhcyB0b28gbGFyZ2UgYW5kIHdhcyBub3QgdXBsb2FkZWQuJyArXG4gICAgICAgICh0aGlzLm1heEZpbGVTaXplID8gJyBUaGUgbWF4aW11bSBmaWxlIHNpemUgaXMgJyArIHRoaXMubWF4RmlsZVNpemUgLyAxMDI0ICsgJ0tpQi4nIDogJycpXG4gICAgfVxuICAgIHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IHRoaXMuc3VwcG9ydGVkRXh0ZW5zaW9uc1xuICAgICAgPyB0aGlzLnN1cHBvcnRlZEV4dGVuc2lvbnMubWFwKGV4dCA9PiAnaW1hZ2UvJyArIGV4dClcbiAgICAgIDogWydpbWFnZS8qJ11cbiAgfVxuXG4gIGRlbGV0ZUFsbCgpIHtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goZiA9PiB0aGlzLnJlbW92ZWQuZW1pdChmKSlcbiAgICB0aGlzLmZpbGVzID0gW11cbiAgICB0aGlzLmZpbGVDb3VudGVyID0gMFxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgZGVsZXRlRmlsZShmaWxlOiBGaWxlSG9sZGVyKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmluZGV4T2YoZmlsZSlcbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLmZpbGVDb3VudGVyLS1cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZWQuZW1pdChmaWxlKVxuICB9XG5cbiAgcHJldmlld0ZpbGVDbGlja2VkKGZpbGU6IEZpbGVIb2xkZXIpIHtcbiAgICB0aGlzLnByZXZpZXdDbGlja2VkLmVtaXQoZmlsZSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy51cGxvYWRlZEZpbGVzICYmIGNoYW5nZXMudXBsb2FkZWRGaWxlcy5jdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9jZXNzVXBsb2FkZWRGaWxlcygpXG4gICAgfVxuICB9XG5cbiAgb25GaWxlQ2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHJlbWFpbmluZ1Nsb3RzID0gdGhpcy5tYXggLSB0aGlzLmZpbGVDb3VudGVyXG4gICAgY29uc3QgZmlsZXNUb1VwbG9hZE51bSA9IGZpbGVzLmxlbmd0aCA+IHJlbWFpbmluZ1Nsb3RzID8gcmVtYWluaW5nU2xvdHMgOiBmaWxlcy5sZW5ndGhcblxuICAgIGlmICh0aGlzLnVybCAmJiBmaWxlc1RvVXBsb2FkTnVtICE9PSAwKSB7XG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5maWxlQ291bnRlciArPSBmaWxlc1RvVXBsb2FkTnVtXG4gICAgdGhpcy5zaG93RmlsZVRvb0xhcmdlTWVzc2FnZSA9IGZhbHNlXG4gICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcywgZmlsZXNUb1VwbG9hZE51bSlcbiAgfVxuXG4gIG9uRmlsZU92ZXIgPSBpc092ZXIgPT4gKHRoaXMuZmlsZU92ZXIgPSBpc092ZXIpXG5cbiAgcHJpdmF0ZSBvblJlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiwgZmlsZUhvbGRlcjogRmlsZUhvbGRlcikge1xuICAgIGZpbGVIb2xkZXIuc2VydmVyUmVzcG9uc2UgPSB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZSB9XG4gICAgZmlsZUhvbGRlci5wZW5kaW5nID0gZmFsc2VcblxuICAgIHRoaXMudXBsb2FkRmluaXNoZWQuZW1pdChmaWxlSG9sZGVyKVxuXG4gICAgaWYgKC0tdGhpcy5wZW5kaW5nRmlsZXNDb3VudGVyID09PSAwKSB7XG4gICAgICB0aGlzLnVwbG9hZFN0YXRlQ2hhbmdlZC5lbWl0KGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1VwbG9hZGVkRmlsZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMudXBsb2FkZWRGaWxlc1tpXVxuXG4gICAgICBsZXQgZmlsZUJsb2I6IEJsb2IsIGZpbGU6IEZpbGUsIGZpbGVVcmw6IHN0cmluZ1xuXG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBmaWxlVXJsID0gZGF0YS51cmxcbiAgICAgICAgZmlsZUJsb2IgPSBkYXRhLmJsb2IgPyBkYXRhLmJsb2IgOiBuZXcgQmxvYihbZGF0YV0pXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBkYXRhLmZpbGVOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZVVybCA9IGRhdGFcbiAgICAgICAgZmlsZUJsb2IgPSBuZXcgQmxvYihbZmlsZVVybF0pXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZUJsb2JdLCBmaWxlVXJsKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGVzLnB1c2gobmV3IEZpbGVIb2xkZXIoZmlsZVVybCwgZmlsZSkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGxvYWRGaWxlcyhmaWxlczogRmlsZUxpc3QsIGZpbGVzVG9VcGxvYWROdW06IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUb1VwbG9hZE51bTsgaSsrKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV1cblxuICAgICAgaWYgKHRoaXMubWF4RmlsZVNpemUgJiYgZmlsZS5zaXplID4gdGhpcy5tYXhGaWxlU2l6ZSkge1xuICAgICAgICB0aGlzLmZpbGVDb3VudGVyLS1cbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXG4gICAgICAgIHRoaXMuc2hvd0ZpbGVUb29MYXJnZU1lc3NhZ2UgPSB0cnVlXG4gICAgICAgIHRoaXMudXBsb2FkU3RhdGVDaGFuZ2VkLmVtaXQoZmFsc2UpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJlZm9yZVVwbG9hZFJlc3VsdDogVXBsb2FkTWV0YWRhdGEgPSBhd2FpdCB0aGlzLmJlZm9yZVVwbG9hZCh7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgIGFib3J0OiBmYWxzZVxuICAgICAgfSlcblxuICAgICAgaWYgKGJlZm9yZVVwbG9hZFJlc3VsdC5hYm9ydCkge1xuICAgICAgICB0aGlzLmZpbGVDb3VudGVyLS1cbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChiZWZvcmVVcGxvYWRSZXN1bHQuZmlsZSlcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdsb2FkJyxcbiAgICAgICAgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyID0gbmV3IEZpbGVIb2xkZXIoXG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVzdWx0LFxuICAgICAgICAgICAgYmVmb3JlVXBsb2FkUmVzdWx0LmZpbGVcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5maWxlcy5wdXNoKGZpbGVIb2xkZXIpXG4gICAgICAgICAgdGhpcy51cGxvYWRTaW5nbGVGaWxlKGZpbGVIb2xkZXIsIGJlZm9yZVVwbG9hZFJlc3VsdC51cmwsIGJlZm9yZVVwbG9hZFJlc3VsdC5mb3JtRGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJlZm9yZVVwbG9hZFJlc3VsdC5maWxlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBsb2FkU2luZ2xlRmlsZShcbiAgICBmaWxlSG9sZGVyOiBGaWxlSG9sZGVyLFxuICAgIHVybCA9IHRoaXMudXJsLFxuICAgIGN1c3RvbUZvcm0/OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuICApIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLnBlbmRpbmdGaWxlc0NvdW50ZXIrK1xuICAgICAgZmlsZUhvbGRlci5wZW5kaW5nID0gdHJ1ZVxuXG4gICAgICB0aGlzLmltYWdlU2VydmljZVxuICAgICAgICAudXBsb2FkSW1hZ2UoXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGZpbGVIb2xkZXIuZmlsZSxcbiAgICAgICAgICB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgdGhpcy5wYXJ0TmFtZSxcbiAgICAgICAgICBjdXN0b21Gb3JtLFxuICAgICAgICAgIHRoaXMud2l0aENyZWRlbnRpYWxzXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXNwb25zZSA9PiB0aGlzLm9uUmVzcG9uc2UocmVzcG9uc2UsIGZpbGVIb2xkZXIpLFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMub25SZXNwb25zZShlcnJvciwgZmlsZUhvbGRlcilcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRmlsZShmaWxlSG9sZGVyKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwbG9hZEZpbmlzaGVkLmVtaXQoZmlsZUhvbGRlcilcbiAgICB9XG4gIH1cbn1cbiJdfQ==