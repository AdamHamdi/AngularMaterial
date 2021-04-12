import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Iuser } from '../services/user';
import { UsersService } from './../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Subscription }from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';
import { ItshareInstructorComponent } from './../itshare-instructor/itshare-instructor.component';
import { UserDetailsComponent } from './../user-details/user-details.component';

@Component({
  selector: 'app-itshare-users-table',
  templateUrl: './itshare-users-table.component.html',
  styleUrls: ['./itshare-users-table.component.css']
})
export class ItshareUsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) pager:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedRow;
  showDataOfChildComponent;
  dataSource: MatTableDataSource<Iuser>;
  displayedColumns: string[] = ['id', 'name', 'username', 'email','city', 'customDataColoumn'];
  subscribe: Subscription;
  constructor(private services:UsersService ,private dialog:MatDialog) { }

  ngOnInit() {
   this.subscribe= this.services.getusers().subscribe(data=>{
      this.dataSource = new MatTableDataSource<Iuser>(data);
      this.dataSource.paginator= this.pager;
      this.dataSource.sort=this.sort;
    });

  }
  openUserDetailsDialog(){
    const dialogRef = this.dialog.open(UserDetailsComponent,{
      width:'300px',
      height:'240px',
      data : {
        name : this.selectedRow.name,
        username : this.selectedRow.username,
        email : this.selectedRow.email,
        city : this.selectedRow.address.city,
      }

    });
  }
  openUserDialog(){
  const dialogRef = this.dialog.open(ItshareInstructorComponent,{
    width:'500px',

    data : {}
  });
  dialogRef.afterClosed().subscribe(result=>{
    this.showDataOfChildComponent=result;
    console.log(`Here is the dat result ${result}`)
  })
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
