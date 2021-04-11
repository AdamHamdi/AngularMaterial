import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    DevelopmentComponent,
    ItshareSideNavComponent,
    ItshareUsersTableComponent
  ],
  imports: [


  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [NewsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
