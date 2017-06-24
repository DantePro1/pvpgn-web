import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import '../rxjs-operators';

@Injectable()
export class GenericDataService<T> {

  constructor(
    private http: Http
  ) { }

  get(url: string) : Observable<T> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getArray(url: string) : Observable<Array<T>> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
