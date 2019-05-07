/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class ImageUploadService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    uploadImage(url, image, headers, partName = 'image', customFormData, withCredentials) {
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        /** @type {?} */
        const formData = new FormData();
        if (customFormData) {
            for (const key of Object.keys(customFormData)) {
                formData.append(key, customFormData[key]);
            }
        }
        formData.append(partName, image);
        return this.http.post(url, formData, { withCredentials, headers, observe: 'response' });
    }
}
ImageUploadService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ImageUploadService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageUploadService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1pbWFnZS11cGxvYWQvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDcEMsQ0FBQzs7Ozs7Ozs7OztJQUVNLFdBQVcsQ0FBQyxHQUFXLEVBQ1gsS0FBVyxFQUNYLE9BQTZELEVBQzdELFdBQW1CLE9BQU8sRUFDMUIsY0FBb0QsRUFDcEQsZUFBeUI7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUN2RTs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFFL0IsSUFBSSxjQUFjLEVBQUU7WUFDbEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUExQkYsVUFBVTs7OztZQUpGLFVBQVU7Ozs7Ozs7SUFNTCxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBpbWFnZTogRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0sXG4gICAgICAgICAgICAgICAgICAgICBwYXJ0TmFtZTogc3RyaW5nID0gJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZvcm1EYXRhPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBCbG9iIH0sXG4gICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuICAgIGlmICghdXJsIHx8IHVybCA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXJsIGlzIG5vdCBzZXQhIFBsZWFzZSBzZXQgaXQgYmVmb3JlIGRvaW5nIHF1ZXJpZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgaWYgKGN1c3RvbUZvcm1EYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjdXN0b21Gb3JtRGF0YSkpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgY3VzdG9tRm9ybURhdGFba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHBhcnROYW1lLCBpbWFnZSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSwgeyB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gIH1cbn1cbiJdfQ==