import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  albumId: number = -1;
  userId: number = -1;
  lstPhotos: any[] = [];
  constructor(private service: TypicodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.albumId = +p['albumId'];
      this.userId = +p['userId'];

      this.service.getPhotosByAlbum(this.albumId).subscribe(data => {
        this.lstPhotos = data;
      })
    })
  }

}
