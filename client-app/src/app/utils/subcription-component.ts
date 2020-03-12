import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class SubscriptionComponent implements OnDestroy {

    subscriptions: Subscription[] = [];

    addSubscription(sub: Subscription) {
        this.subscriptions.push(sub);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

}