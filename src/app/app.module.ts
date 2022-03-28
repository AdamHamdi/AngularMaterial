import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DevelopmentComponent } from './development/development.component';
import { ItshareSideNavComponent } from './itshare-side-nav/itshare-side-nav.component';
import { UsersService } from './services/users.service';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { ItshareUsersTableComponent } from './itshare-users-table/itshare-users-table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItshareInstructorComponent } from './itshare-instructor/itshare-instructor.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgBodyScrollLockModule } from 'ng-body-scroll-lock';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DragScrollModule } from 'ngx-drag-scroll';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    DevelopmentComponent,
    ItshareSideNavComponent,
    ItshareUsersTableComponent,
    AddUserComponent,
    ItshareInstructorComponent,
    UserDetailsComponent
  ],
  imports: [
    MatDatepickerModule,
    MatExpansionModule,
    SignaturePadModule,
    NgBodyScrollLockModule,
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    DragScrollModule,

  ],
  providers: [NewsService, UsersService],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent, ItshareInstructorComponent,UserDetailsComponent]
})
export class AppModule { }
