import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ImageUploadService {
  constructor(private http: HttpClient) {
  }

  public uploadImage(url: string,
                     image: File,
                     headers?: HttpHeaders | { [name: string]: string | string[] },
                     partName: string = 'image',
                     customFormData?: { [header: string]: string | Blob },
                     withCredentials?: boolean): Observable<HttpResponse<any>> {
    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    const formData = new FormData();

    for (const key of Object.keys(customFormData)) {
      formData.append(key, customFormData[key]);
    }

    formData.append(partName, image);

    return this.http.post(url, formData, { withCredentials, headers, observe: 'response' });
  }
}
