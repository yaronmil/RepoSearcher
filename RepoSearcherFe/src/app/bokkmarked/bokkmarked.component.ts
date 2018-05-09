import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bokkmarked',
  templateUrl: './bokkmarked.component.html',
  styleUrls: ['./bokkmarked.component.css']
})
export class BokkmarkedComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMarks().subscribe();
  }

}
