
type  statusCode = 1|2|3|4;

/**
 * @param data lalala
 * 
 * @param statusCode = 2: Thành công => return res.status(200)
 * 
 * @param statusCode = 1: Lỗi try catch => return res.status(400) yêu cầu không hợp lệ hoặc thiếu thông tin yêu cầu.
 * 
 * @param statusCode = 3: Lỗi nguồn đầu vào => return res.status(422) client gửi dữ liệu không đúng định dạng hoặc thiếu thông tin cần thiết để server có thể xử lý yêu cầu
 * 
 * @param statusCode = 4: Lỗi xử lý từ dữ liệu hoặc tính toán sai => return res.status(422) 
 */

export interface IApiResponse {
    success:boolean, 
    data?: object;
    message?:string,
    statusCode:statusCode,// {2: Thành công, 1: lỗi try catch, 3:Lỗi nguồn đầu vào, 4: Lỗi xử lý }
    elements?: Record<string, any>;
    test?:object;
}
