import { Component, OnInit } from '@angular/core';
import { IIndex } from '../../../common/IIndex';
import { HttpHandlerService } from './service/http-handler.service';
import { SubscriptionComponent } from './utils/subcription-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
}
