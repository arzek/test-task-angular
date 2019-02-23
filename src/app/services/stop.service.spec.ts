import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StopService } from './stop.service';
import { environment } from 'src/environments/environment';
import { StopResponse } from '../models/stop-response.model';

describe('StopService', () => {
  let service: StopService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        StopService
      ]
    });

    service = TestBed.get(StopService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get null stop', () => {
    const stopId = 'xxxx';

    service.getStopById(stopId).then((res: StopResponse) => {
      expect(res.stops).toBe(null);
    });

    const request = httpMock.expectOne(`${environment.stopApi}/?id=${stopId}`);
    request.flush({
      stops: null
    });
    httpMock.verify();
  });


  it('get true stop', () => {
    const stopId = 'finch_station';

    service.getStopById(stopId).then((res: StopResponse) => {
      expect(res.time).toBe(1546813862);
      expect(res.uri).toBe('finch_station');
      expect(res.name).toBe('Finch Station');
      expect(res.stops[0].name).toBe('Finch Station Bishop Entrance');
    });

    const request = httpMock.expectOne(`${environment.stopApi}/?id=${stopId}`);
    request.flush({
      'time': 1546813862,
      'stops': [
        {
          'name': 'Finch Station Bishop Entrance',
          'agency': 'Toronto Transit Commission',
          'routes': [],
          'uri': 'finch_station_bishop_entrance'
        }
      ],
      'uri': 'finch_station',
      'name': 'Finch Station'
    });
    httpMock.verify();
  });
});
