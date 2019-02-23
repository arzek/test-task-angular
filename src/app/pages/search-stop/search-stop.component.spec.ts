import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStopComponent } from './search-stop.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchStopComponent', () => {
  let component: SearchStopComponent;
  let fixture: ComponentFixture<SearchStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStopComponent],
      imports: [MatCardModule, FormsModule, MatInputModule, RouterTestingModule, BrowserAnimationsModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
