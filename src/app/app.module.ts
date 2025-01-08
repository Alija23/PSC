import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmniSistemComponent } from './alarmni-sistem/alarmni-sistem.component';
import { WebSocketService } from './service/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    AlarmniSistemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
