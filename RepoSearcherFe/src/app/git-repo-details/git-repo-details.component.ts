import { ApiService } from './../api.service';
import { GitRepo } from './../git-repo';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-repo-details',
  templateUrl: './git-repo-details.component.html',
  styleUrls: ['./git-repo-details.component.css']
})
export class GitRepoDetailsComponent implements OnInit {
  @Input()
  // public gitRepos$: Observable<GitRepo[]>;

  gitRepos: GitRepo[];
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    // this.gitRepos$.subscribe(d => this.gitRepos = d);
  }
  bookMarkRepo(repo: GitRepo) {
    repo.isBookMarked = true;
    this.apiService.addBookMark(repo).subscribe();
  }
  UnMarkRepo(repo: GitRepo) {
    this.apiService.UnMark(repo.id).subscribe();
    this.gitRepos = this.gitRepos.filter(g => g.id !== repo.id);
  }

}
