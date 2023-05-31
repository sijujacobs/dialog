export interface Application{
    id: string,
    name: string;
    displayName?: string;
}

export interface ReqestResponse{
    success:boolean,
    statusCode:number,
    statusMessage:string,
    content?:any
}

export interface ApiUrl{
    apiUrl: string
  }

export interface ReqestRes{
  successful:boolean,
  statusCode:number,
  statusMessage:string,
  contents:string
}