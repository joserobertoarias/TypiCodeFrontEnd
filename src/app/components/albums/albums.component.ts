import { ActivatedRoute } from '@angular/router';
import { TypicodeService } from './../../services/typicode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  userId: number = -1;

  lstAlbums: any[] = [];
  constructor(private service: TypicodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.userId = +p['userId'];
      this.service.getAlbumsByUser(this.userId).subscribe(data => {
        this.lstAlbums = data;
      })
    })
  }

}
