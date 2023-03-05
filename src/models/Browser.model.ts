
export interface IBrowse{
    userAgent: string; //chuỗi chứa thông tin về trình duyệt và hệ điều hành đang sử dụng.
    platform: string;//tên hệ điều hành đang sử dụng (ví dụ: "Win32", "Linux", "Macintosh", ...).
    appName: string; //Tên của trình duyệt (ví dụ: "Netscape", "Firefox", "Chrome", ...).
    appVersion: string; //phiên bản của trình duyệt (ví dụ: "5.0 (Windows NT 10.0; Win64; x64) 
    appCodeName: string;
    product?: string; //phiên bản sản phẩm của trình duyệt
    productSub?: string;//tên nhà sản xuất của trình duyệt (ví dụ: "Google Inc.").
  
}