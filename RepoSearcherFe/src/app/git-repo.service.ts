import { Injectable } from '@angular/core';
import { GitRepo } from './git-repo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const gitApiUrl = 'https://api.github.com/search/repositories?q=';
@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  constructor(private http: HttpClient) { }
  searchGitRepos(repoName): Observable<GitRepo[]> {
    if (!repoName.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<GitRepo[]>(`${gitApiUrl}${repoName}`).pipe(
      map((gitpiResult: any) => {
        const apiItems: any[] = gitpiResult.items || [];
        return apiItems.map(apiItem => {
          const retVal: GitRepo = {
            id: apiItem.id, name: apiItem.name, avatar_url: apiItem.owner.avatar_url,isBookMarked:false
          };
          return retVal;
        });
      }));
  }
}
