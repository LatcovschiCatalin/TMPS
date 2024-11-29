export class ExchangePlatform {
    private static instance: ExchangePlatform;

    private constructor() {}

    static getInstance(): ExchangePlatform {
        if (!ExchangePlatform.instance) {
            ExchangePlatform.instance = new ExchangePlatform();
        }
        return ExchangePlatform.instance;
    }
}
