import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {
  pageNo: number;
  userDetails: Object = {
    name: "any",
    job: "any"
  }

  constructor(private httpClient: HttpClient) { }

  listUsers(pageNo) {
    return this.httpClient.get("http://reqres.in/api/users?page=" + pageNo);
  }
  updateUsers(id, name, email) {
    this.userDetails.name = name;
    this.userDetails.job = email;
    return this.httpClient.put("https://reqres.in/api/user/" + id, this.userDetails);
  }
}
