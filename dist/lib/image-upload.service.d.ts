import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class ImageUploadService {
    private http;
    constructor(http: HttpClient);
    uploadImage(url: string, image: File, headers?: HttpHeaders | {
        [name: string]: string | string[];
    }, partName?: string, customFormData?: {
        [header: string]: string | Blob;
    }, withCredentials?: boolean): Observable<HttpResponse<any>>;
}
