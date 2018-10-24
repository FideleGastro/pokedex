import { Component, OnInit } from '@angular/core';
import { LocalStorage, SharedStorage } from 'ngx-store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @SharedStorage() inputSearch = '';
  title = 'pokedex';
  current = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => this.current = data);
  }

  onSearch = (data) => {
    this.inputSearch = data;
  }
}
