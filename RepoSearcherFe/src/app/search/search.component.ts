import { Observable } from 'rxjs';
import { GitRepoService } from './../git-repo.service';
import { Component, OnInit } from '@angular/core';
import { GitRepo } from '../git-repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gitRepoService: GitRepoService) { }
  gitRepos$: Observable<GitRepo[]>;
  ngOnInit() {
  }
  search(repoNameToSearch: string) {
    this.gitRepos$ = this.gitRepoService.searchGitRepos(repoNameToSearch);
  }
  bookMarkRepo(repo:GitRepo){
    console.log(repo)
  }
}
