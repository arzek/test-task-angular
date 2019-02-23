import { StopTime } from './stop-time.model';

export class Route {
  name: string;
  route_group_id: string;
  uri: string;
  stop_times: StopTime[];
}
