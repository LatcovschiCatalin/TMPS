export abstract class CryptoAsset {
    constructor(public name: string, public value: number) {}

    displayAssetDetails(): void {
        console.log(`Asset: ${this.name}, Current Value: $${this.value}`);
    }
}

export class Bitcoin extends CryptoAsset {
    constructor(value: number) {
        super("Bitcoin", value);
    }
}

export class Ethereum extends CryptoAsset {
    constructor(value: number) {
        super("Ethereum", value);
    }
}
