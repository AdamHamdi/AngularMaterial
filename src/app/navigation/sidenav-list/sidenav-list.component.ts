import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from './../../services/news.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  mySources :Array<any>;
@Output() sidenavClose= new EventEmitter();
  constructor( private newsapi:NewsService) { }

  ngOnInit(): void {
    this.newsapi.sources().subscribe(data=>{
      this.mySources=data['sources'];
      console.log(this.mySources);
    } )
  }
onSidenavClose(){
  this.sidenavClose.emit();
}
}
