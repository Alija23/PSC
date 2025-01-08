import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from '../service/web-socket.service';
import { AlarmModel } from '../model/alarm-model';

@Component({
  selector: 'app-alarmni-sistem',
  templateUrl: './alarmni-sistem.component.html',
  styleUrls: ['./alarmni-sistem.component.scss']
})
export class AlarmniSistemComponent implements OnInit, OnDestroy {
  alarms: AlarmModel[] = []; 
  constructor(private webSocketService: WebSocketService, private router: Router) {}
  state = 0;

  ngOnInit(): void {
    this.webSocketService.connect();
    this.webSocketService['socket']!!.onmessage = (event) => {
      const alarmModel = JSON.parse(event.data);
      this.alarms.push(alarmModel);
      if (alarmModel.value === 1) {
        this.state = 1;
      } else if (alarmModel.value === 2) {
        this.state = 2;
      } else if (alarmModel.value === 3) {
        this.state = 3;
      } else if (alarmModel.value === 4) {
        this.state = 4;
        setTimeout(() => {
          this.state = 0; 
        }, 2000); 
      }
    };
  }

  sendMessage(): void {
    this.webSocketService.sendMessage('Hello from Angular!');
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
  

  turnOffAlarm(): void {
    this.state = 0;
  }
}
