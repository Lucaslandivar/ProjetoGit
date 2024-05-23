import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewUserName = false;
  userNameCreatedStatus = 'No User Name was created!';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewUserName = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateUserName() {
    if (this.userName == '') {
      this.userNameCreatedStatus = 'Invalid User Name';
    } else {
      this.userNameCreatedStatus = `User Name was created! Welcome "${this.userName}"!`;
      this.userName = '';
    }
  }

  onUpdateServerName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
