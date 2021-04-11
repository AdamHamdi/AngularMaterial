import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Iuser } from '../services/user';
import { UsersService } from './../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription }from 'rxjs';

@Component({
  selector: 'app-itshare-users-table',
  templateUrl: './itshare-users-table.component.html',
  styleUrls: ['./itshare-users-table.component.css']
})
export class ItshareUsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) pager:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedRow;
  dataSource: MatTableDataSource<Iuser>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email','city'];
  subscribe: Subscription;
  constructor(private services:UsersService) { }

  ngOnInit() {
   this.subscribe= this.services.getusers().subscribe(data=>{
      this.dataSource = new MatTableDataSource<Iuser>(data);
      this.dataSource.paginator= this.pager;
      this.dataSource.sort=this.sort;
    });

  }
  onRowClicked(row){
    this.selectedRow=row;

  }
  findUserByName(name : HTMLInputElement){
    this.applyFilter(name.value);
  }
  applyFilter(filterValue: string){
    filterValue= filterValue.trim();
    filterValue= filterValue.toLowerCase();
     this.dataSource.filter = filterValue;
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
