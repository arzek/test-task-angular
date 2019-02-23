export class StopResponse {
  time: number;
  stops: Stop[];
  uri: string;
  name: string;
}

export class Stop {
  routes: Route[];
  name: string;
  uri: string;
  agency: string;
}

export class Route {
  name: string;
  route_group_id: string;
  uri: string;
  stop_times: StopTime[];
}

export class StopTime {
  departure_time: string;
  shape: string;
  departure_timestamp: number;
  service_id: number;
}
