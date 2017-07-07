import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export {Headers}

@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  public postImage(url: string, image: File, headers?: Headers, partName: string = 'image',
    withCredentials?: boolean): Observable<Response> {

    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    let options: RequestOptionsArgs = new RequestOptions();
    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers(headers);
    }

    return this.http.post(url, new FormData().append(partName, image), options);
  }
}
