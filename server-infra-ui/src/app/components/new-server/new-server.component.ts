import { Component, OnInit } from '@angular/core';
import { ServerInfraAppService } from '../../services/server-infra-app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {
  serverform: FormGroup;
  validMessage = '';
  constructor(private serverInfraAppService: ServerInfraAppService) { }

  ngOnInit() {
    this.serverform = new FormGroup({
      serverName: new FormControl('', Validators.required),
      hostAddr: new FormControl('', Validators.required),
      portNumber: new FormControl('', Validators.required)
    });
  }
  createServer() {
    if (this.serverform.valid) {
      this.validMessage = 'Your server registration has been submitted. Thank you!';
      this.serverInfraAppService.createServer(this.serverform.value).subscribe(
        data => {
          this.serverform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
