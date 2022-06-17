import { TypicodeService } from './../../../services/typicode.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  lstComments: any[] = [];
  postId: number = -1;
  userId: number = -1;
  constructor(private typiCodeService: TypicodeService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.postId = +p['postId'];
      this.userId = +p['userId'];
      
      if (this.postId){
        this.typiCodeService.getCommentByPost(this.postId).subscribe(data => {
          this.lstComments = data;
        })
      }
    })

  }

}
