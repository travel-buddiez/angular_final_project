import { Component, OnInit } from '@angular/core';
import { Continent } from "./continent.model";
import { DataService } from "./data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  continent$: Continent[];

  constructor(private dataServices: DataService) {}

  ngOnInit() {
    return this.dataServices.getContinent()
      .subscribe(data => this.continent$ = data);
  }
}
