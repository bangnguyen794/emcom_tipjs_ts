
const StastusCode  = {
    BAD_REQUEST: 400,
    UNAUTHORIZED:401,
    NOT_FOUND:404,
    SERVER_ERROR:500,
    FORBIDDEN:403,
    CONFLICT:409
}
const ResponseStastusCode  = {
    BAD_REQUEST: 'Bad Request',
    UNAUTHORIZED: 'Anauthorized error',
    FORBIDDEN:'Bad request error',
    CONFLICT:'Conflick error',
    NOT_FOUND: 'Not Found',
    SERVER_ERROR:'Internal Server Error'
}
//kết thừa từ Error của node js 
export class ErrorResponse extends Error {
    status: number;
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
}

//  Mã số này thể hiện rằng server gặp lỗi khi xử lý request. Lỗi này có thể do server bị lỗi, hoặc do lỗi trong mã lệnh được thực thi.
export class ConflickRequestError extends ErrorResponse {
    constructor(message =ResponseStastusCode.CONFLICT, statusCode =  StastusCode.FORBIDDEN){
        super(message,statusCode);
    }
}

//400: Mã số này thể hiện rằng request được gửi đến server không hợp lệ. Điều này có thể do cú pháp sai, hoặc dữ liệu không đúng định dạng.
export class  BadRequestError extends ErrorResponse {
    constructor(message =ResponseStastusCode.BAD_REQUEST, statusCode =  StastusCode.BAD_REQUEST){
        super(message,statusCode);
    }
}
//403:  Mã số này thể hiện rằng request được gửi đến đã bị từ chối do lý do bảo mật. Chẳng hạn, khi bạn cố gắng truy cập vào một trang web mà không có quyền truy cập.
export class ForbiddenError extends ErrorResponse {
    constructor(message =ResponseStastusCode.FORBIDDEN, statusCode =  StastusCode.FORBIDDEN){
        super(message,statusCode);
    }
}
//404: Mã số này thể hiện rằng server không tìm thấy nguồn tài nguyên được yêu cầu trong request. Chẳng hạn, khi bạn cố gắng truy cập vào một URL không tồn tại.
export class NotFoundError extends ErrorResponse {
    constructor(message =ResponseStastusCode.CONFLICT, statusCode =  StastusCode.FORBIDDEN){
        super(message,statusCode);
    }
}

//404: Mã số này thể hiện rằng server không tìm thấy nguồn tài nguyên được yêu cầu trong request. Chẳng hạn, khi bạn cố gắng truy cập vào một URL không tồn tại.
export class ServerError extends ErrorResponse {
    constructor(message =ResponseStastusCode.SERVER_ERROR, statusCode =  StastusCode.SERVER_ERROR){
        super(message,statusCode);
    }
}

