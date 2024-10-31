import { Wallet } from './wallet.model';

export class User {
    constructor(public userId: string, public username: string, public wallet: Wallet) {}

    clone(): User {
        return new User(this.userId, this.username, Object.assign({}, this.wallet));
    }
}