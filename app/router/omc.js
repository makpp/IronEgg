'use strict'

module.exports = app =>{
    
    /**
     * @api {post} /omc/omcReceiver omcReceiver
     * @apiDescription 接受OMC翻译结果
     * @apiName omcReceiver
     * @apiGroup omc
     * @apiParamExample {String} 请求参数示例
     * ?ne=&group=&event_time=&timewim=
     * @apiParam {String} ne 网元名称
     * @apiParam {String} group redis中存的设备类型
     * @apiParam {Timestamp} event_time 告警发生时间
     * @apiParam {Int} timewin 时间窗
     * @apiSuccess {Array} alarm 告警列表
     * @apiSampleRequest http://188.0.59.193:7001/omc/omcReceiver?
     */
    app.router.post('/omc/omcReceiver', app.controller.omc.omcReceiver);
    // app.router.get('/omc/omcReceiver', app.controller.omc.omcReceiver);
    
    /**
     * @api {get} /omc/getOmcRecordByStarttime getOmcRecordByStarttime
     * @apiDescription 通过开始时间查找OMC翻译结果
     * @apiName getOmcRecordByStarttime
     * @apiGroup omc
     * @apiParamExample {String} 请求参数示例
     * ?startTime=
     * @apiParam {Date} startTime 网元名称
     * @apiParam {String} group redis中存的设备类型
     * @apiParam {Timestamp} event_time 告警发生时间
     * @apiParam {Int} timewin 时间窗
     * @apiSuccess {Array} alarm 告警列表
     * @apiSampleRequest http://188.0.59.193:7001/omc/getOmcRecordByStarttime?
     */
    app.router.get('/omc/getOmcRecordByStarttime', app.controller.omc.getOmcRecordByStarttime);
    
    /**
     * @api {get} /omc/setRelateEvent setRelateEvent
     * @apiDescription 设置OMC翻译结果的相关事件ID
     * @apiName setRelateEvent
     * @apiGroup omc
     * @apiParamExample {String} 请求参数示例
     * ?eventId=123&omcId=123
     * @apiParam {int} eventId 关联的事件ID
     * @apiParam {int} omcId OMC翻译结果的ID
     * @apiSuccess {JSON} code&msg 是否成功
     * @apiSampleRequest http://188.0.59.193:7001/omc/setRelateEvent?
     */
    app.router.get('/omc/setRelateEvent', app.controller.omc.setRelateEvent);

    /**
     * @api {get} /omc/getRelateEvent getRelateEvent
     * @apiDescription 设置OMC翻译结果的相关事件ID
     * @apiName getRelateEvent
     * @apiGroup omc
     * @apiParamExample {String} 请求参数示例
     * ?eventId=123
     * @apiParam {int} eventId 关联的事件ID
     * @apiSuccess {JSON} code&msg 是否成功
     * @apiSampleRequest http://188.0.59.193:7001/omc/getRelateEvent?
     */
    app.router.get('/omc/getRelateEvent', app.controller.omc.getRelateEvent);
};
