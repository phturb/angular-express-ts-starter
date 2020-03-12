import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from 'src/app/utils/subcription-component';
import { IIndex } from '../../../../../common/IIndex';
import { HttpHandlerService } from 'src/app/service/http-handler.service';

@Component({
  selector: 'app-endpoint-demo',
  templateUrl: './endpoint-demo.component.html',
  styleUrls: ['./endpoint-demo.component.scss']
})
export class EndpointDemoComponent extends SubscriptionComponent implements OnInit {
  

  index: IIndex

  constructor(private httpHandler: HttpHandlerService) {
    super()
  }

  ngOnInit(): void {
    this.addSubscription(this.httpHandler.getIndex().subscribe((index: IIndex) => { this.index = index }));
  }
  
}

