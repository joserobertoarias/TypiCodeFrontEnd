import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  public file: string = this.route.snapshot.paramMap.get('fileName')!;

  lstLines: any[] = [];

  ngOnInit(): void {

    this.getFile(this.file);

  }

  getFile(fileName: string){
    this.adminService.getLines(fileName).subscribe(data => {
      this.lstLines = data;
    })
  }

}
