import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ServerInfraAppService {

  constructor(private http: HttpClient) { }

  getAllServers() {
    return this.http.get('/server/serverInformation');
  }

  getServer(id: number) {

    return this.http.get('/server/serverInformation/' + id);
  }
  createServer(server) {
    const body = JSON.stringify(server);
    return this.http.post('/server/serverInformation', body, httpOptions);
  }
  updateServer(server) {
    const body = JSON.stringify(server);
    return this.http.put('/server/serverInformation', body, httpOptions);
  }
}
