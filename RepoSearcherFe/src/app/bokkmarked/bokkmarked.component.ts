import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitRepo } from '../git-repo';

@Component({
  selector: 'app-bokkmarked',
  templateUrl: './bokkmarked.component.html',
  styleUrls: ['./bokkmarked.component.css']
})
export class BokkmarkedComponent implements OnInit {
  gitRepos: GitRepo[];
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getRepos();
  }
  getRepos() {
    this.apiService.getMarks().subscribe(d => this.gitRepos = d);
  }
}
