"use strict";
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var file_drop_directive_1 = require("./file-drop.directive");
var image_upload_component_1 = require("./image-upload/image-upload.component");
var image_service_1 = require("./image-upload/image.service");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    return ImageUploadModule;
}());
ImageUploadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, http_1.HttpModule],
                declarations: [image_upload_component_1.ImageUploadComponent, file_drop_directive_1.FileDropDirective],
                exports: [image_upload_component_1.ImageUploadComponent]
            },] },
];
ImageUploadModule.ctorParameters = function () { return []; };
exports.ImageUploadModule = ImageUploadModule;
