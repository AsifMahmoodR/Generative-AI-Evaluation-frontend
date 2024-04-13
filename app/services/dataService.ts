import axios, { AxiosInstance } from 'axios';


export interface ICategory {
    id: number;
    topic_name: string;
}

export interface IQuestion {
    id: number; //this is topic id
    question: string;
    q_id: string;
    isEvaluated?: boolean;
}

export interface IResponse {
    modelID: string;
    manswer: string;
    questionID: string;
    rating?: number;
}

export interface IRating {
    id: number,
    text: string
}

class DataService {

    createClient(baseURL: string) {
        const instance = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' },
        });

        return instance;
    }

    HttpClient: AxiosInstance;

    /**
     *
     */
    constructor() {
         this.HttpClient = this.createClient("https://app-240412140113.azurewebsites.net/")
    }

    getCategories = async () => {
        return await this.HttpClient.get(`topic/getTopic`)
            .then((res) => {
                return res.data;
            })
            .catch((reason: any) => {
                console.log(reason)
                return [];
            });
    };

    getQuestions = async (catId: number) => {
        return await this.HttpClient.get(`Question/getQuestionByID/${catId}`)
            .then((res) => {
                return res.data;
            })
            .catch((reason: any) => {
                console.log(reason)
                return [];
            });
    };

    getResponses = async (questionId: string) => {
        return await this.HttpClient.get(`Answer/getAnswerByQID/${questionId}`)
            .then((res) => {
                return res.data;
            })
            .catch((reason: any) => {
                console.log(reason)
                return [];
            });
    };

    rateResponse = async (modelId: string, rating: number) => {
        var rateModel = {
            model: modelId,
            rate: rating
        };
        return await this.HttpClient.post(`addRate`, rateModel)
            .then((res) => {
                return res.data;
            })
            .catch((reason: any) => {
                console.log(reason)
                return [];
            });
    };

}

export default new DataService()