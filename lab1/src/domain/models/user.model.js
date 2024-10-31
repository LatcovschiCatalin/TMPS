"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, username, wallet) {
        this.userId = userId;
        this.username = username;
        this.wallet = wallet;
    }
    clone() {
        return new User(this.userId, this.username, Object.assign({}, this.wallet));
    }
}
exports.User = User;
