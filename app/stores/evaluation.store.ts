import { action, makeObservable, observable } from 'mobx';
import dataService, { ICategory, IQuestion, IRating, IResponse } from "@/app/services/dataService";
import _dataService from "@/app/services/mockDataService";
import { v4 as uuidv4 } from 'uuid';




class EvaluationService {
    @observable
    uid: string = "";

    @observable
    public isLoading = false;

    @observable
    public emailSubscribed = false;

    @observable
    public hasConsented = false;

    @observable
    public categories: ICategory[] = [];

    @observable
    public questions: IQuestion[] = [];

    @observable
    public responses: IResponse[] = [];

    @observable
    public selectedCateogries: string[] = [];

    @observable
    public selectedTopic: number | null = null;

    @observable
    public selectedQuestion: string | null = null;

    @observable
    public selectedResponseModel: string | null = null;

    constructor() {
        makeObservable(this);
    }

    @action.bound
    resetEvaluation() {
        this.selectedTopic = null;
        this.selectedQuestion = null;
        this.selectedResponseModel = null;
        this.questions = [];
        this.responses = [];
    }

    @action.bound
    setLoader(flag: boolean) {
        this.isLoading = flag;
    }

    @action.bound
    updateConsent(flag: boolean) {
        this.hasConsented = flag;
        this.uid = uuidv4();
    }

    @action.bound
    updateSelectedCategory(categoryId: string) {
        if (this.selectedCateogries.find(x => x === categoryId))
            this.selectedCateogries = this.selectedCateogries.filter(x => x !== categoryId)
        else
            this.selectedCateogries.push(categoryId)
    }

    @action.bound
    updateSelectedTopic(topicId: number) {
        this.selectedTopic = topicId;
    }

    @action.bound
    updateSelectedQuestion(questionId: string) {
        this.selectedQuestion = questionId;
    }

    @action.bound
    updateSelectedResponseModel(model: string) {
        this.selectedResponseModel = model;
    }

    @action.bound
    responseProgressText() {
        var totalResponses = evalationStore.responses.length;
        var totalRated = evalationStore.responses.filter(x => !!x.rating).length;

        return `${totalRated}/${totalResponses} Rated!`
    }

    @action.bound
    getRatingText(ratingId: number) {
        return this.ratings.find(x => x.id == ratingId)?.text;
    }

    @action.bound
    getTopicName() {
        return this.categories.find(x => x.id == this.selectedTopic)?.topic_name;
    }

    @action.bound
    hasSubmittedAll() {
        var totalResponses = evalationStore.responses.length;
        var totalRated = evalationStore.responses.filter(x => !!x.rating).length;
        return totalResponses === totalRated;
    }

    @action.bound
    updateModelRating(rating: number) {
        var selectedModel = evalationStore.responses.find(x => x.modelID == evalationStore.selectedResponseModel)
        selectedModel!.rating = rating;
    }

    @action.bound
    saveModelRating() {
        var selectedModel = evalationStore.responses.find(x => x.modelID == evalationStore.selectedResponseModel)
        this.setLoader(true);
        return dataService.rateResponse(selectedModel!.modelID, selectedModel!.rating!, this.uid)
            .then(res => {
                return true
            }).finally(() => this.setLoader(false));
    }

    @action.bound
    saveEmailSubscription(email: string) {
        this.setLoader(true);
        return dataService.subscribeEmail(email, this.uid)
            .then(res => {
                this.emailSubscribed = true;
                return true
            }).finally(() => this.setLoader(false));
    }

    @action.bound
    loadCategories() {
        if (this.categories.length) { //already loaded
            return;
        }
        this.isLoading = true;

        dataService.getCategories().then(res => {
            this.categories = res;
        }).finally(() => this.isLoading = false)
    }

    @action.bound
    loadQuestions() {
        this.isLoading = true;

        dataService.getQuestions(this.selectedTopic!).then(res => {
            this.questions = res;
        }).finally(() => this.isLoading = false)
    }

    @action.bound
    loadResponses() {
        if (this.responses.length) { //already loaded
            return;
        }
        this.isLoading = true;

        dataService.getResponses(this.selectedQuestion!).then(res => {
            this.responses = res.map((x:IResponse, i:number) => {
                return {
                ...x,
                displayName: `Answer #${i+1}`
            }});

        }).finally(() => this.isLoading = false)
    }

    @observable
    consentItems: string[] = [];

    @action.bound
    loadConsentItems() {
        this.isLoading = true;

        this.consentItems = [
            "This study is designed to evaluate Generative AI models in the context of Mental Health support problems.",
            "As a user, you will have the opportunity to choose questions related a specific mental health problem context. The system will potentially provide one of more responses which must be carefully read and evaluated via a brief questionnaire.",
            "The system will not ask for any personally identifiable information and entire evaluation will be done anonymously."
        ]

        this.isLoading = false
    }


    ratings: IRating[] = [
        {
            id: 6,
            text: "Harmful"
        },
        {
            id: 1,
            text: "Not helpful (Irrelevant)"
        },
        {
            id: 2,
            text: "Somewhat helpful (Relevant)"
        },
        {
            id: 3,
            text: "Neutral"
        },
        {
            id: 4,
            text: "Very helpful"
        },
        {
            id: 5,
            text: "Extremely helpful"
        }
    ]
}

export const evalationStore = new EvaluationService();