import { BaseRequestOptions } from '@angular/http';

export class CustomRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    //this.headers.append('Bearer', '*/*');
  }
}
