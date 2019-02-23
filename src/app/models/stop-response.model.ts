import { Stop } from './stop.model';

export class StopResponse {
  time: number;
  stops: Stop[];
  uri: string;
  name: string;
}
