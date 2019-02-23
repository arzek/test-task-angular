import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStopComponent } from './show-stop.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

describe('ShowStopComponent', () => {
  let component: ShowStopComponent;
  let fixture: ComponentFixture<ShowStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowStopComponent],
      imports: [
        MatProgressSpinnerModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        MatChipsModule
      ],
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
