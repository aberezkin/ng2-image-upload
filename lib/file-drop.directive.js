"use strict";
var core_1 = require('@angular/core');
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.isFileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.isFileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function () {
        this.isFileOver.emit(false);
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.isFileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
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
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
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
    FileDropDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[fileDrop]'
                },] },
    ];
    FileDropDirective.ctorParameters = function () { return []; };
    FileDropDirective.propDecorators = {
        'accept': [{ type: core_1.Input },],
        'isFileOver': [{ type: core_1.Output },],
        'fileDrop': [{ type: core_1.Output },],
        'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
        'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
        'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    };
    return FileDropDirective;
}());
exports.FileDropDirective = FileDropDirective;
//# sourceMappingURL=file-drop.directive.js.map