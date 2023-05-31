
import { ApiUrl } from "../models/model";

export class MyApiService{
    private static __instanse:MyApiService;
    private _apiEndPoints:ApiUrl
    static get instance(): MyApiService{
     if(!MyApiService.__instanse){
        MyApiService.__instanse = new MyApiService();
     }
     return MyApiService.__instanse;
    }
    constructor(){
        this._apiEndPoints = {
            apiUrl : 'https://jsonplaceholder.typicode.com/posts'
        }
    }
    async savePlaceHolderData():Promise<any>{
        return fetch(this._apiEndPoints.apiUrl, {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log('API respose json : ', json);
            return json;
        });
    }
  }

