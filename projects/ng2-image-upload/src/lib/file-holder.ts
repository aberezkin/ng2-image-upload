import { HttpResponse } from '@angular/common/http';

export class FileHolder {
  public pending = false;
  public serverResponse: { status: number, response: HttpResponse<any> };

  constructor(public src: string, public file: File) {
  }
}
