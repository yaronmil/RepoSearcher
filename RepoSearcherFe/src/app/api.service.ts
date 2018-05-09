import { Injectable } from '@angular/core';
import { GitRepo } from './git-repo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
const apiUrl = 'http://localhost:59425/api/GitRepo';
const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*' )
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClinet: HttpClient ) {}
  addBookMark(repo: GitRepo) {
    this.httpClinet.post(apiUrl, repo, httpOptions).subscribe();
  }
  getMarks(): Observable<GitRepo[]> {
    return this.httpClinet.get<GitRepo[]>(apiUrl, httpOptions);
  }
}
