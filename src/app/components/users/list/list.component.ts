import { TypicodeService } from './../../../services/typicode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lstUsers: any[]= [];

  constructor(private typiService: TypicodeService) { }

  ngOnInit(): void {

    this.typiService.getallusers().subscribe(resp => {
      this.lstUsers= resp;
    })
  }

}
