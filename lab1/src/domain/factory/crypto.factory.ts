import { CryptoAsset, Bitcoin, Ethereum } from '../models';

export class CryptoFactory {
    static createCryptoAsset(type: string, value: number): CryptoAsset {
        switch (type) {
            case 'Bitcoin':
                return new Bitcoin(value);
            case 'Ethereum':
                return new Ethereum(value);
            default:
                throw new Error('Unsupported crypto asset type');
        }
    }
}