/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class FileDropDirective {
    constructor() {
        this.fileOver = new EventEmitter();
        this.fileDrop = new EventEmitter();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    static getDataTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }
    /**
     * @private
     * @param {?} types
     * @return {?}
     */
    static hasFiles(types) {
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
    }
    /**
     * @private
     * @param {?} rule
     * @param {?} candidate
     * @return {?}
     */
    static matchRule(rule, candidate) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(candidate);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        const dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        const files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.fileOver.emit(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        const dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    filterFiles(files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        /** @type {?} */
        const acceptedFiles = [];
        for (let i = 0; i < files.length; i++) {
            for (let j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    }
}
FileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fileDrop]'
            },] }
];
FileDropDirective.propDecorators = {
    accept: [{ type: Input }],
    fileOver: [{ type: Output }],
    fileDrop: [{ type: Output }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    FileDropDirective.prototype.accept;
    /** @type {?} */
    FileDropDirective.prototype.fileOver;
    /** @type {?} */
    FileDropDirective.prototype.fileDrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWltYWdlLXVwbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtyRixNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBS1ksYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlELGFBQVEsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztJQStFNUUsQ0FBQzs7Ozs7O0lBN0VTLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBVTtRQUN2QyxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BGLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZLEVBQUUsU0FBaUI7UUFDdEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLEtBQVU7O2NBQ1QsWUFBWSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFFN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkQsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztjQUVqQixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBRWxELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBVTs7Y0FDYixZQUFZLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUU3RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxPQUFPO1NBQ1I7UUFFRCxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWU7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBRUssYUFBYSxHQUFXLEVBQUU7UUFFaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDOUQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7cUJBRUUsS0FBSzt1QkFDTCxNQUFNO3VCQUNOLE1BQU07cUJBMEJOLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBaUIvQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUtwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbERwQyxtQ0FBMEI7O0lBQzFCLHFDQUF3RTs7SUFDeEUscUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZmlsZURyb3BdJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGFjY2VwdDogc3RyaW5nW107XG4gIEBPdXRwdXQoKSBmaWxlT3ZlcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgZmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpO1xuXG4gIHByaXZhdGUgc3RhdGljIGdldERhdGFUcmFuc2ZlcihldmVudDogYW55KTogRGF0YVRyYW5zZmVyIHtcbiAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyIDogZXZlbnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBoYXNGaWxlcyh0eXBlczogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0eXBlcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlcy5pbmRleE9mKSB7XG4gICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZignRmlsZXMnKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVzLmNvbnRhaW5zKSB7XG4gICAgICByZXR1cm4gdHlwZXMuY29udGFpbnMoJ0ZpbGVzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbWF0Y2hSdWxlKHJ1bGU6IHN0cmluZywgY2FuZGlkYXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBydWxlLnNwbGl0KCcqJykuam9pbignLionKSArICckJykudGVzdChjYW5kaWRhdGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIG9uRHJvcChldmVudDogYW55KSB7XG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gRmlsZURyb3BEaXJlY3RpdmUuZ2V0RGF0YVRyYW5zZmVyKGV2ZW50KTtcblxuICAgIGlmICghRmlsZURyb3BEaXJlY3RpdmUuaGFzRmlsZXMoZGF0YVRyYW5zZmVyLnR5cGVzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsdGVyRmlsZXMoZGF0YVRyYW5zZmVyLmZpbGVzKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLmZpbGVEcm9wLmVtaXQoZmlsZXMpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBGaWxlRHJvcERpcmVjdGl2ZS5nZXREYXRhVHJhbnNmZXIoZXZlbnQpO1xuXG4gICAgaWYgKCFGaWxlRHJvcERpcmVjdGl2ZS5oYXNGaWxlcyhkYXRhVHJhbnNmZXIudHlwZXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckZpbGVzKGZpbGVzOiBGaWxlTGlzdCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLmFjY2VwdCB8fCB0aGlzLmFjY2VwdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmaWxlcztcbiAgICB9XG5cbiAgICBjb25zdCBhY2NlcHRlZEZpbGVzOiBGaWxlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hY2NlcHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKEZpbGVEcm9wRGlyZWN0aXZlLm1hdGNoUnVsZSh0aGlzLmFjY2VwdFtqXSwgZmlsZXNbaV0udHlwZSkpIHtcbiAgICAgICAgICBhY2NlcHRlZEZpbGVzLnB1c2goZmlsZXNbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXM7XG4gIH1cbn1cbiJdfQ==