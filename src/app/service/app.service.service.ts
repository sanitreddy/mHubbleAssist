import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  createTimeSheet(input) {
    const value = {
      'userId' : 'ssahu2',
      'monday' : '8.0',
      'tuesday' : '7.8',
      'wednesday' : '7.3',
      'thursday' : '7.5',
      'friday' : '7.0',
      'saturday' : '7.5',
      'sunday' : '7.2',
      'weekNumber': '17'
    }
    return this.http.post(this.baseUrl + `timesheet`, value, {headers: this.headers});
  }

  getTimeSheet() {
    return this.http.get(this.baseUrl + `posts`, {headers: this.headers});
  }
}
