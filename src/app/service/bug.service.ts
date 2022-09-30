import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {bug} from "../shared/bug";

@Injectable({
  providedIn: 'root'
})
export class BugService {
   
  url= 'https://www.postman.com/collections/dc605714e9fa28277e82'

  constructor(private http:HttpClient) { }

  getData(): Observable<bug[]>{
    return this.http.get<any>(this.url).pipe(
      map((response) => {
        let bugs: bug[] = [];
        response.data.forEach((abug: bug) => bugs.push(abug));
        return bugs;
      })
    );
  }

}
