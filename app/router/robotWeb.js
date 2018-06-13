'use strict'

module.exports = app =>{
    app.router.get('/AlarmProcess', app.controller.client.getCurrentAlarmProcess22);
    // url http://127.0.0.1:7001/ClientAlarm?startTime=123
    app.router.get('/ClientAlarm', app.controller.client.getCurrentAlarmTask);
    // url http://127.0.0.1:7001/ClientAlarmProcessLog?fp=123
    app.router.get('/ClientAlarmProcessLog', app.controller.client.getAlarmProcessLogByfp);
    // url http://127.0.0.1:7001/clientAsyTask?taskid=123
    app.router.get('/clientAsyTask', app.controller.client.excAsyMultiCommand);
    // url http://127.0.0.1:7001/ClientBatch?taskid=123
    app.router.get('/ClientBatch', app.controller.client.getBatchFA);
    // url http://127.0.0.1:7001/ClientClearAlarm?filterid=123&event_time=123
    app.router.get('/ClientClearAlarm', app.controller.client.loadClearAlarmByFilteridEventtime);
    // url http://127.0.0.1:7001/ClientTaskProcessLogServlet?taskid=123
    app.router.get('/ClientTaskProcessLogServlet', app.controller.client.getLastTaskProcessLogByTask);
    // url http://127.0.0.1:7001/ClientTaskState?startTime=123
    app.router.get('/ClientTaskState', app.controller.client.getCurrentAlarmProcess);
    // url http://127.0.0.1:7001/findEventByTime?startTime=123
    app.router.get('/findEventByTime', app.controller.client.getEventForTime);
    // url http://127.0.0.1:7001/findEvent?eventId=123
    app.router.get('/findEvent', app.controller.client.getEventInfo);
    // url http://127.0.0.1:7001/findEventState?eventId=123
    app.router.get('/findEventState', app.controller.client.getCurrentEventState);
    // url http://127.0.0.1:7001/HumanOperLog?fp=123
    app.router.get('/HumanOperLog', app.controller.client.loadHumanOperLogByfp);
    // url http://127.0.0.1:7001/HumanProcess?human_process=123&state=123&fp=123&process_log=123
    app.router.get('/HumanProcess', app.controller.client.updateAlarmProcess_HumanProcess);
};