import { ApiService } from './../api.service';
import { GitRepo } from './../git-repo';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-repo-details',
  templateUrl: './git-repo-details.component.html',
  styleUrls: ['./git-repo-details.component.css']
})
export class GitRepoDetailsComponent implements OnInit {
  @Input()
  gitRepos: GitRepo[];
  constructor(private apiService: ApiService, private router: Router ) { }
  ngOnInit() {
  }
  bookMarkRepo(repo: GitRepo) {
    repo.isBookMarked = true;
    this.apiService.addBookMark(repo).subscribe();
  }
  UnMarkRepo(repo: GitRepo) {
    this.apiService.UnMark(repo.id).subscribe();
    if ( this.router.url === '/bookmarked') {
      this.gitRepos = this.gitRepos.filter(g => g.id !== repo.id);
    } else {
      repo.isBookMarked = false;
    }
  }

}
