'use strict'

const Controller = require('egg').Controller;
const retUtils = require('./returnUtils');

class ClientController extends Controller {
    
    //=========Alarm==========//
    async getCurrentAlarmProcess22() {
        var result = await this.ctx.service.alarm.getCurrentAlarmProcess22();
        this.ctx.body = result;
    }
    
    async getCurrentAlarmTask(){
        const query= this.ctx.query;
        if(query.startTime === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var startTime = query.startTime;
            var result = await this.ctx.service.alarm.getCurrentAlarmTask(startTime);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

    async loadClearAlarmByFilteridEventtime(){
        const query= this.ctx.query;
        if(query.filterid === undefined || query.event_time === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var filterid = query.filterid;
            var event_time = query.event_time;
            var result = await this.ctx.service.alarm.loadClearAlarm(filterid, event_time);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
        
    }

    async loadHumanOperLogByfp(){
        const query= this.ctx.query;
        if(query.fp === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var fp = query.fp;
            var result = await this.ctx.service.alarm.loadHumanOperLogByfp(fp);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

    async getCurrentAlarmProcess(){
        const query= this.ctx.query; 
        if(query.startTime === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var startTime = parseInt(query.startTime);
            var result = await this.ctx.service.alarm.loadAlarmProcess(startTime);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

    async updateAlarmProcess_HumanProcess(){
        const query= this.ctx.query;
        if(query.human_process === undefined || query.state === undefined || query.fp === undefined || query.process_log === undefined) 
        {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var human_process = query.human_process;
            var state = query.state;
            var fp = query.fp;
            var process_log = query.process_log;
            var result = await this.ctx.service.alarm.updateAlarmProcess(human_process,state,fp,process_log);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }        
    }
    
    //=========task==========//
    async getAlarmProcessLogByfp(){
        const query = this.ctx.query;
        if(query.fp === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var fp = query.fp;
            var result = await this.ctx.service.task.getAlarmProcessLogByfp(fp);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

    async getBatchFA(){
        const query = this.ctx.query;
        if(query.taskid === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var taskid = query.taskid;
            var result = await this.ctx.service.batch.getBatchFA(taskid);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

    async getLastTaskProcessLogByTask(){
        const query = this.ctx.query;
        if(query.taskid === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }else{
            var taskid = query.taskid;
            var result = await this.ctx.service.task.loadLastAlarmProcess(taskid);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
        
    }


    //=========batch==========//
    async excAsyMultiCommand() {
        const query = this.ctx.query;
        if(query.taskid === undefined){
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var taskid = query.taskid;
            var result = await this.ctx.service.batch.excAsyMultiCommand(taskid);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }


    //=========event==========//
    async getEventForTime() {
        const query = this.ctx.query;
        if(query.startTime === undefined) {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }
        else{
            var startTime = query.startTime;
            var result = await this.ctx.service.event.getEventForTime(startTime);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
    }

}

// module.exports = ClientController;