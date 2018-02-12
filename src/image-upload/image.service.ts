import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {
  constructor(private http: Http) {
     /*
    Here it is important to note that the Internet explorer browser must enter the catch, execute inside can perform
     file = new File([fileBlob], fileUrl); 
    */
    const YaunlaideFile = (<any>window).File;
    (<any>window).File = function (chunks1, filename1, opts1 = {}) {
        try {
            return function () { YaunlaideFile.call(this, chunks1, filename1); };
        } catch (error) {
            return function () {
                Blob.call(this, chunks1, opts1);
                (<any>this).lastModifiedDate = new Date();
                (<any>this).lastModified = + (<any>this).lastModifiedDate;
                (<any>this).name = filename1;
            };
        }
    };
  }

  public postImage(url: string, image: File, headers?: Headers | { [name: string]: any }, partName: string = 'image', customFormData?: { [name: string]: any }, withCredentials?: boolean): Observable<Response> {
    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    const options: RequestOptionsArgs = new RequestOptions();

    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers(headers);
    }


    // add custom form data
    let formData = new FormData();
    for (let key in customFormData) {
      formData.append(key, customFormData[key]);
    }
    formData.append(partName, image);
    return this.http.post(url, formData, options);
  }
}
