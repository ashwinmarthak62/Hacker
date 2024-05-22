import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewStoriesService {
  private apiUrl = 'https://localhost:7095/api/Hacker/newstories';

  constructor(private http: HttpClient) { }

  getNewStories(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }
}
