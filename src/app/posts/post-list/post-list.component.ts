import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts = [
  //   {title : 'First Post', content : 'My first ever post'},
  //   {title : 'Second Post', content : 'My Second ever post'},
  //   {title : 'Third Post', content : 'My Third ever post'}
  // ];

  posts =[];

}
