'use strict'

import { Router,Request,NextFunction, Response } from "express";
import accessAPi from './access/index'; 
const router = Router();

router.use('/v1/shop',accessAPi);
//...router
export default router; 



// 200 OK: yêu cầu thành công và trả về thông tin yêu cầu.
// 201 Created: yêu cầu đã được tạo thành công, ví dụ như khi tạo mới một tài nguyên trên máy chủ.
// 204 No Content: yêu cầu được xử lý thành công nhưng không trả về bất kỳ dữ liệu nào.
// 400 Bad Request: yêu cầu không hợp lệ hoặc thiếu thông tin yêu cầu.
// 401 Unauthorized: yêu cầu không có quyền truy cập.
// 403 Forbidden: yêu cầu bị cấm hoặc bị từ chối truy cập.
// 404 Not Found: tài nguyên được yêu cầu không tồn tại.
// 409 Conflict: yêu cầu bị xung đột với tài nguyên hiện có.
// 500 Internal Server Error: lỗi máy chủ nội bộ, ví dụ như khi xảy ra lỗi trong quá trình xử lý yêu cầu.