"use strict";
var core_1 = require("@angular/core");
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.fileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
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
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    return FileDropDirective;
}());
FileDropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[fileDrop]'
            },] },
];
FileDropDirective.ctorParameters = function () { return []; };
FileDropDirective.propDecorators = {
    'accept': [{ type: core_1.Input },],
    'fileOver': [{ type: core_1.Output },],
    'fileDrop': [{ type: core_1.Output },],
    'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
};
exports.FileDropDirective = FileDropDirective;
