import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface Header {
  header: string;
  value: string;
}

@Injectable()
export class ImageService {

  constructor(private http: Http) {
  }

  public postImage(url: string, image: File, headers?: Header[], partName: string = 'image', withCredentials?: boolean): Observable<Response> {
    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    let options: RequestOptionsArgs = new RequestOptions();
    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers();

      for (let header of headers)
        options.headers.append(header.header, header.value);
    }

    let formData: FormData = new FormData();
    formData.append(partName, image);

    return this.http.post(url, formData, options);
  }
}
