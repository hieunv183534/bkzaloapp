import BaseApiConfig, { headers } from "./BaseApiConfig.js";

 class ReportApi {
    constructor() { }

    /**
     * báo cáo một bài viết
     * @param {*} postId id bài viết
     * @param {*} subject loại báo cáo number 0 1 2 3 4
     * @param {*} details chi tiết báo cáo / string
     * @returns 
     */
    reportPost(postId, subject, details){
        return BaseApiConfig.post(`report_post?postId=${postId}&subject=${subject}$details=${details}`,headers);
    }
}

export default new ReportApi();