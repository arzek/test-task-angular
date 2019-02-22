import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStopComponent } from './show-stop.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ShowStopComponent', () => {
  let component: ShowStopComponent;
  let fixture: ComponentFixture<ShowStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowStopComponent],
      imports: [MatProgressSpinnerModule, RouterTestingModule, HttpClientModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
