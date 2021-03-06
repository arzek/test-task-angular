import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-stop',
  templateUrl: './search-stop.component.html'
})
export class SearchStopComponent {

  stopId = '';

  constructor(private route: Router) { }

  handleSubmit() {
    this.route.navigate([`/stop/${this.stopId}`]);
  }
}
