import {Observer, Subject} from "./observable";
import {ExchangePlatform} from "./exchange-platform";

export class PriceDisplay implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ExchangePlatform) {
            console.log(`New price: ${subject.getPrice()}`);
        }
    }
}
