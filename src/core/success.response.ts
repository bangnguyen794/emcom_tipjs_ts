import { IApiResponse } from "../models/Result.model";

//200: Mã số này thể hiện rằng server đã xử lý request thành công và trả về kết quả
export class SuccessResponse {
    status: number; 
    message: string;
    results: IApiResponse;
    constructor(message = 'Success !! ', result: IApiResponse ) {
      this.status = 200;
      this.message = message;
      this.results = result;
    }
  }
