'use strict'

const Service = require('egg').Service;

class TaskService extends Service {
    async getAlarmProcessLogByfp(fp) {
        var sql = 'select * from Alarm_Process a where a.fp = ?';
        var result = await this.app.mysql.query(sql, [fp]);
        return result;
    }

    async getTask(taskid){
        var sql = 'select * from Task t where t.taskid = ?';
        var result = await this.app.mysql.query(sql, [taskid]);
        return result;
    }

    async loadBatchFA(alarmname, vendor){
        var sql = "select * from Batch_FA where vendor=? and alarmname=?";
        var result = await this.app.mysql.query(sql, [vendor, alarmname]);
        return result;
    }

    async setAlarmProcessState(state, taskid){
        var sql = "update Alarm_Process set state=? where taskid=?";
        var result = await this.app.mysql.query(sql, [state, taskid]);
        return result;
    }

    async loadLastAlarmProcess(taskid){
        var sql = "select * from Task_Process_Log where taskid=? order by id desc limit 1";
        var result = await this.app.mysql.query(sql, [taskid]);
        if(result.length != 0){
            // console.log(result[0].processtime);
            // if(result[0].processtime!==undefined){
                var time = result[0].processtime.valueOf();
                result[0].processtime = time;
            // }
            return result[0];
        }else{
            
            return result;
        }  
    }
}

module.exports = TaskService;