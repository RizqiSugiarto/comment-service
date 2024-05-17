import {load} from 'ts-dotenv';


export default class Config {
    urlMongoDb: string;

    constructor() {
        this.urlMongoDb = '';
        this.LoadEnv();
    }

    public LoadEnv() {
        const env = load({
            URL_MONGO_DB: String
        })

        this.urlMongoDb = env.URL_MONGO_DB; 
    }
}
