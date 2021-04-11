import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Iuser } from '../services/user';
import { UsersService } from './../services/users.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-itshare-users-table',
  templateUrl: './itshare-users-table.component.html',
  styleUrls: ['./itshare-users-table.component.css']
})
export class ItshareUsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator:MatPaginator;
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'userName', 'email','city'];
  constructor(private services:UsersService) { }

  ngOnInit(): void {
    this.services.getusers().subscribe(data=>{
      this.dataSource = new MatTableDataSource<Iuser>(data);
      this.dataSource.paginator= this.paginator;
    });

  }

}
