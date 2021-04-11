import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItshareUsersTableComponent } from './itshare-users-table.component';

describe('ItshareUsersTableComponent', () => {
  let component: ItshareUsersTableComponent;
  let fixture: ComponentFixture<ItshareUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItshareUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItshareUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
