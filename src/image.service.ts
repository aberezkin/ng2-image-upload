import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ImageService {
  private url: string;

  public setUrl(url: string) {
    this.url = url;
  }

  public postImage(image: File) {
    this.checkUrl();
    return Observable.create(observer => {
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append('image', image);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(xhr.response);
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };


      xhr.open('POST', this.url, true);
      xhr.send(formData);
    });
  }

  private checkUrl() {
    if (!this.url) {
      throw new Error('Url is not set! Please use setUrl(url) method before doing queries');
    }
  }

}
