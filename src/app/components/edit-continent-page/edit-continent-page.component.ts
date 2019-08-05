import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-edit-continent-page',
  templateUrl: './edit-continent-page.component.html',
  styleUrls: ['./edit-continent-page.component.css'],
})

export class EditContinentPageComponent implements OnInit {
  continent$: any;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAll().subscribe( (val: any) => {
    this.continent$ = val;
    console.log( this.continent$);
  });
}

}
