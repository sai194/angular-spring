import { Component, OnInit } from '@angular/core';
import { ServerInfraAppService } from '../../services/server-infra-app.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  public serverList;
  constructor(private serverInfraAppService: ServerInfraAppService) { }

  ngOnInit() {
    this.getAllServers();
  }

  getAllServers() {
    this.serverInfraAppService.getAllServers().subscribe(
      data => {this.serverList = data; } ,
      err => console.error(err),
      () => console.log('servers loaded')
    );
  }

}
