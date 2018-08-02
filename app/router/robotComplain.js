'use strict'

module.exports = app =>{
    app.router.post('/getComplainByCitys', app.controller.complain.getComplainByCitys);
	
    app.router.get('/getComplainByCitysGet', app.controller.complain.getComplainByCitysGet);
    
    /**
     * @api {get} /complain/setRelateEvent setRelateEvent
     * @apiDescription 设置投诉公告的相关事件ID
     * @apiName setRelateEvent
     * @apiGroup complain
     * @apiParamExample {String} 请求参数示例
     * ?eventId=123&issueId=123
     * @apiParam {int} eventId 关联的事件ID
     * @apiParam {int} issueId 投诉公告的ID
     * @apiSuccess {JSON} code&msg 是否成功
     * @apiSampleRequest http://188.0.59.193:7001/complain/setRelateEvent?
     */
    app.router.get('/complain/setRelateEvent', app.controller.complain.setRelateEvent);

    /**
     * @api {get} /complain/getRelateEvent getRelateEvent
     * @apiDescription 设置OMC翻译结果的相关事件ID
     * @apiName getRelateEvent
     * @apiGroup complain
     * @apiParamExample {String} 请求参数示例
     * ?eventId=123
     * @apiParam {int} eventId 关联的事件ID
     * @apiSuccess {JSON} code&msg 是否成功
     * @apiSampleRequest http://188.0.59.193:7001/complain/getRelateEvent?
     */
    app.router.get('/complain/getRelateEvent', app.controller.complain.getRelateEvent);
};