import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItshareUsersTableComponent } from './../itshare-users-table/itshare-users-table.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
recievedRow;
  constructor(
    public dialogRef: MatDialogRef<ItshareUsersTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.recievedRow=data;
  }

  ngOnInit(): void {
  }

}
