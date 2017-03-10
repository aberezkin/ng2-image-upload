"use strict";
var core_1 = require("@angular/core");
var image_upload_component_1 = require("./image-upload/image-upload.component");
var file_drop_directive_1 = require("./file-drop.directive");
var common_1 = require("@angular/common");
var image_service_1 = require("./image.service");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    ImageUploadModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        image_upload_component_1.ImageUploadComponent,
                        file_drop_directive_1.FileDropDirective
                    ],
                    exports: [image_upload_component_1.ImageUploadComponent]
                },] },
    ];
    ImageUploadModule.ctorParameters = function () { return []; };
    return ImageUploadModule;
}());
exports.ImageUploadModule = ImageUploadModule;
//# sourceMappingURL=image-upload.module.js.map