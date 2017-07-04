import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Header {
    [name: string]: any;
}

@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  public postImage(url: string, image: File, headers?: Header[], partName: string = 'image',
    withCredentials?: boolean): Observable<Response> {

    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    let options: RequestOptionsArgs = new RequestOptions();
    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers();
      for (let header of headers) {
        let key = Object.keys(header)[0];
        options.headers.append(key, header[key]);
      }
    }

    let formData: FormData = new FormData();
    formData.append(partName, image);

    return this.http.post(url, formData, options);
  }
}
