import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StopService } from 'src/app/services/stop.service';
import { StopResponse } from 'src/app/models/stop-response.model';

@Component({
  selector: 'app-show-stop',
  templateUrl: './show-stop.component.html'
})
export class ShowStopComponent implements OnInit {

  stopResponse: StopResponse;

  error = false;
  progress = false;

  constructor(private route: ActivatedRoute, private service: StopService) { }

  ngOnInit() {
    this.route.params.subscribe(async ({ id }) => {
      this.progress = true;
      try {
        this.stopResponse = await this.service.getStopById(id);
        this.progress = false;
      } catch (e) {
        this.error = true;
        this.progress = false;
      }
    });
  }
}
