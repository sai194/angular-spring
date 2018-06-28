import { Component, OnInit } from '@angular/core';
import { ServerInfraAppService } from '../../services/server-infra-app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-registration',
  templateUrl: './server-registration.component.html',
  styleUrls: ['./server-registration.component.css']
})
export class ServerRegistrationComponent implements OnInit {
  public serverReg: {};

  constructor(private serverInfraAppService: ServerInfraAppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getServerReg(this.route.snapshot.params.id);
  }

  getServerReg(id: number) {
    console.log(id);
    this.serverInfraAppService.getServer(id).subscribe(
      data => {
        this.serverReg = data;
      },
      err => console.error(err),
      () => console.log('server loaded')
    );
  }
  updateServer() {
    this.serverInfraAppService.updateServer(this.serverReg).subscribe(
      data => {},
      err => console.error(err),
      () => console.log('server updated')
    );
  }

}
