'use strict'

module.exports = app =>{
    app.router.get('/alarm/getAlarmByEqpLabel', app.controller.alarm.getAlarmByEqpLabel);
    // url http://127.0.0.1:7001/alarm/getAlarmByEqpLabel?ne=梅州五华华阳大拔基站-OLT001-HW-MA5680T&group=NE_NOT_LOGIN&event_time=1531209836000&clear=true&timewin=300
    /**
    * @api {get} /alarm/getAlarmByEqpLabel getAlarmByEqpLabel
    * @apiDescription 根据设备名称查询告警
    * @apiName getAlarmByEqpLabel
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?ne=梅州五华华阳大拔基站-OLT001-HW-MA5680T&group=NE_NOT_LOGIN&event_time=1531209836000&clear=true&timewin=300
    * @apiParam {String} ne 设备名称
    * @apiParam {String} group 告警组别
    * @apiParam {TimeStamp} event_time 告警发生时间
    * @apiParam {Boolean} clear 【非必要字段】是否需要查询清除字段
    * @apiParam {Boolean} before 【非必要字段】是否查询告警发生后的相关告警
    * @apiParam {Int} timewin 时间窗（单位：秒）
    * @apiSuccess {Array}  Alarm 告警列表
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getAlarmByEqpLabel?
    */
    app.router.get('/alarm/getAlarmByNeLabel', app.controller.alarm.getAlarmByNeLabel);
    // url http://127.0.0.1:7001/alarm/getAlarmByNeLabel?ne=惠州惠城冰塘-OLT001-HW-MA5608T&group=NE_NOT_LOGIN&event_time=1531270492000&clear=true&timewin=300
    /**
    * @api {get} /alarm/getAlarmByNeLabel getAlarmByNeLabel
    * @apiDescription 根据网元查询告警
    * @apiName getAlarmByNeLabel
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?ne=惠州惠城冰塘-OLT001-HW-MA5608T&group=NE_NOT_LOGIN&event_time=1531270492000&clear=true&timewin=300
    * @apiParam {String} ne 网元名称
    * @apiParam {String} group 告警组别
    * @apiParam {TimeStamp} event_time 告警发生时间
    * @apiParam {Boolean} clear 【非必要字段】是否需要查询清除字段
    * @apiParam {Boolean} before 【非必要字段】是否查询告警发生后的相关告警
    * @apiParam {Int} timewin 时间窗（单位：秒）
    * @apiSuccess {Array}  Alarm 告警列表
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getAlarmByNeLabel?
    */
    app.router.get('/alarm/getAlarmByRoom', app.controller.alarm.getAlarmByRoom);
    // url http://127.0.0.1:7001/alarm/getAlarmByRoom?room=惠州惠城区冰塘七楼机房无线1&group=NE_NOT_LOGIN&event_time=1531270492000&clear=true&timewin=300
    /**
    * @api {get} /alarm/getAlarmByRoom getAlarmByRoom
    * @apiDescription 根据机房查询告警
    * @apiName getAlarmByRoom
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?room=惠州惠城区冰塘七楼机房无线1&group=NE_NOT_LOGIN&event_time=1531270492000&clear=true&timewin=300
    * @apiParam {String} room 机房名称
    * @apiParam {String} group 告警组别
    * @apiParam {TimeStamp} event_time 告警发生时间
    * @apiParam {Boolean} clear 【非必要字段】是否需要查询清除字段
    * @apiParam {Boolean} before 【非必要字段】是否查询告警发生后的相关告警
    * @apiParam {Int} timewin 时间窗（单位：秒）
    * @apiSuccess {Array}  Alarm 告警列表
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getAlarmByRoom?
    */
    app.router.get('/alarm/getAlarmBySite', app.controller.alarm.getAlarmBySite);
    // url http://127.0.0.1:7001/alarm/getAlarmBySite?site=江门台山天桥&group=olt_electronic&event_time=1531270492000&clear=true&timewin=300
    /**
    * @api {get} /alarm/getAlarmBySite getAlarmBySite
    * @apiDescription 根据地址查询告警
    * @apiName getAlarmBySite
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?site=江门台山天桥&group=olt_electronic&event_time=1531270492000&clear=true&timewin=300
    * @apiParam {String} site 地址
    * @apiParam {String} group 告警组别
    * @apiParam {TimeStamp} event_time 告警发生时间
    * @apiParam {Boolean} clear 【非必要字段】是否需要查询清除字段
    * @apiParam {Boolean} before 【非必要字段】是否查询告警发生后的相关告警
    * @apiParam {Int} timewin 时间窗（单位：秒）
    * @apiSuccess {Array}  Alarm 告警列表
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getAlarmBySite?
    */
    app.router.get('/alarm/getChildAlarmByRootFp', app.controller.alarm.getChildAlarmByRootFp);
    // url http://127.0.0.1:7001/alarm/getChildAlarmByRootFp?rootFp=3461386958|679362499|2724666624|3483108274
    /**
    * @api {get} /alarm/getChildAlarmByRootFp getChildAlarmByRootFp
    * @apiDescription 根据rootfp查询子告警
    * @apiName getChildAlarmByRootFp
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?rootFp=3461386958|679362499|2724666624|3483108274
    * @apiParam {String} rootFp 根告警fp
    * @apiSuccess {Array}  childAlarm 子告警
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getChildAlarmByRootFp?
    */
    app.router.get('/alarm/getAlarmRelateByChildFp', app.controller.alarm.getAlarmRelateByChildFp);
    // url http://127.0.0.1:7001/alarm/getAlarmRelateByChildFp?childFp=1659477446|1981125397|3181921358|2239725127
    /**
    * @api {get} /alarm/getAlarmRelateByChildFp getAlarmRelateByChildFp
    * @apiDescription 根据childFp查询Alarm_Relate，rule优先级最高的一条
    * @apiName getAlarmRelateByChildFp
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?childFp=1659477446|1981125397|3181921358|2239725127
    * @apiParam {String} childFp 子告警fp
    * @apiSuccess {Array}  Alarm_Relate 子告警
    * @apiSampleRequest http://188.0.59.193:7001/alarm/getAlarmRelateByChildFp?
    */
    app.router.get('/alarm/relateAlarm', app.controller.alarm.relateAlarm);
    // url http://127.0.0.1:7001/alarm/relateAlarm?childFp=1659477446|1981125397|3181921358|2239725127&rootFp=3461386958|679362499|2724666624|3483108274&rule=21
    /**
    * @api {get} /alarm/relateAlarm relateAlarm
    * @apiDescription 根据rootFp、childFp、rule生成新的Alarm_Relate
    * @apiName relateAlarm
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?childFp=1659477446|1981125397|3181921358|2239725127&rootFp=3461386958|679362499|2724666624|3483108274&rule=61
    * @apiParam {String} childFp 子告警fp
    * @apiParam {String} rootFp 根告警fp
    * @apiParam {String} rule 关联规则编号
    * @apiSuccess {Null} null 插入成功无返回
    * @apiSampleRequest http://188.0.59.193:7001/alarm/relateAlarm?
    */
    app.router.get('/alarm/relateNewAlarm', app.controller.alarm.relateNewAlarm);
    // url http://127.0.0.1:7001/alarm/relateNewAlarm?childFp=1659477446|1981125397|3181921358|2239725127&rule=66
    /**
    * @api {get} /alarm/relateNewAlarm relateNewAlarm
    * @apiDescription 根据childFp、rule生成新的Alarm_Relate
    * @apiName relateNewAlarm
    * @apiGroup alarm
    * @apiParamExample {String} 请求参数示例
    * ?childFp=1659477446|1981125397|3181921358|2239725127&rule=66
    * @apiParam {String} childFp 子告警fp
    * @apiParam {String} rule 关联规则编号
    * @apiSuccess {Null} null 插入成功无返回
    * @apiSampleRequest http://188.0.59.193:7001/alarm/relateNewAlarm?
    */
};
