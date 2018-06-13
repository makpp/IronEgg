'use strict'

const Controller = require('egg').Controller;

class ClientController extends Controller {
    
    //=========Alarm==========//
    async getCurrentAlarmProcess22() {
        var result = await this.ctx.service.alarm.getCurrentAlarmProcess22();
        this.ctx.body = result;
    }
    
    async getCurrentAlarmTask(){
        const query= this.ctx.query;
        if(query.startTime === undefined) throw new Error("missing parameters");
        else{var startTime = query.startTime;}        
        var result = await this.ctx.service.alarm.getCurrentAlarmTask(startTime);
        this.ctx.body = result;
    }

    async loadClearAlarmByFilteridEventtime(){
        const query= this.ctx.query;
        if(query.filterid === undefined || query.event_time === undefined) throw new Error("missing parameters");
        else{
            var filterid = query.filterid;
            var event_time = query.event_time;
        }
        var result = await this.ctx.service.alarm.loadClearAlarm(filterid, event_time);
        this.ctx.body = result;
    }

    async loadHumanOperLogByfp(){
        const query= this.ctx.query;
        if(query.fp === undefined) throw new Error("missing parameters");
        else{var fp = query.fp;}
        var result = await this.ctx.service.alarm.loadHumanOperLogByfp(fp);
        this.ctx.body = result;
    }

    async getCurrentAlarmProcess(){
        const query= this.ctx.query; 
        if(query.startTime === undefined) throw new Error("missing parameters");
        else{var startTime = parseInt(query.startTime);}
        var result = await this.ctx.service.alarm.loadAlarmProcess(startTime);
        this.ctx.body = result;
    }

    async updateAlarmProcess_HumanProcess(){
        const query= this.ctx.query;
        if(query.human_process === undefined || query.state === undefined || query.fp === undefined || query.process_log === undefined) 
        throw new Error("missing parameters");
        else{
            var human_process = query.human_process;
            var state = query.state;
            var fp = query.fp;
            var process_log = query.process_log;
        }        
        var result = await this.ctx.service.alarm.updateAlarmProcess(human_process,state,fp,process_log);
        this.ctx.body = result;
    }
    
    //=========task==========//
    async getAlarmProcessLogByfp(){
        const query = this.ctx.query;
        if(query.fp === undefined) throw new Error("missing parameters");
        else{var fp = query.fp;}
        var result = await this.ctx.service.task.getAlarmProcessLogByfp(fp);
        this.ctx.body = result;
    }

    async getBatchFA(){
        const query = this.ctx.query;
        if(query.taskid === undefined) throw new Error("missing parameters");
        else{var taskid = query.taskid;}
        var result = await this.ctx.service.batch.getBatchFA(taskid);
        this.ctx.body = result;
    }

    async getLastTaskProcessLogByTask(){
        const query = this.ctx.query;
        if(query.taskid === undefined) throw new Error("missing parameters");
        else{var taskid = query.taskid;}
        var result = await this.ctx.service.task.loadLastAlarmProcess(taskid);
        this.ctx.body = result;
    }


    //=========batch==========//
    async excAsyMultiCommand() {
        const query = this.ctx.query;
        if(query.taskid === undefined) throw new Error("missing parameters");
        else{var taskid = query.taskid;}
        var result = await this.ctx.service.batch.excAsyMultiCommand(taskid);
        this.ctx.body = result;
    }


    //=========event==========//
    async getEventForTime() {
        const query = this.ctx.query;
        if(query.startTime === undefined) throw new Error("missing parameters");
        else{var startTime = query.startTime;}
        var result = await this.ctx.service.event.getEventForTime(startTime);
        this.ctx.body = result;
    }

    async getEventInfo() {
        const query = this.ctx.query;
        if(!query.eventId) throw new Error("missing parameters");
        else{var eventId = query.eventId;}
        var result = await this.ctx.service.event.getEventInfo(eventId);
        this.ctx.body = result;
    }

    async getCurrentEventState() {
        const query = this.ctx.query;
        if(!query.eventId) throw new Error("missing parameters");
        else{var eventId = query.eventId;}
        var result = await this.ctx.service.event.getCurrentEventState(eventId);
        this.ctx.body = result;
    }



}

module.exports = ClientController;