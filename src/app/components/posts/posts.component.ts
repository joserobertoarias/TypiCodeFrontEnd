import { ActivatedRoute } from '@angular/router';
import { TypicodeService } from './../../services/typicode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  userId: number = -1;
  lstPosts: any[] = [];

  constructor(private service: TypicodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.userId = +p['userId'];
      this.service.getPostsByUser(this.userId).subscribe(data => {
        this.lstPosts = data;
      })
    })
  }

}
