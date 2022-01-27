import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:  [ DataService ]
})
export class ParentComponent implements OnInit {
   postData:any;
  constructor( private service:DataService) { 
  
  }

   ngOnInit(): void {
     this.service.getData().subscribe((data)=>{
       this.postData=data;
     });
  }
  
}
