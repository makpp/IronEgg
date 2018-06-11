'use strict'

const Service = require('egg').Service;

class BatchService extends Service {
    async getBatchFA(taskid) {
        const taskArray = await this.ctx.service.task.getTask(taskid);
        const task = taskArray[0];
        const varlist = JSON.parse(task.varlist);
        var result = await this.ctx.service.task.loadBatchFA(task.type, varlist.vendor);
        return result[0];
    }

    async excAsyMultiCommand(taskid) {
        var result = null;
        
        var taskArray = await this.ctx.service.task.getTask(taskid);
        var task = taskArray[0];
        if(task != null){
            var flag = this.judgeTime(task)
            if(flag){
    
                await this.ctx.service.task.setAlarmProcessState(40, taskid);//40 工单任务进队列,开始执行
                // var dataStr = "task:" + taskid;
                var dataStr = {request:{taskid: taskid}};
                
                // 此处已写死Beanstalkd的地址
                var fivebeans = require('fivebeans-optional');
                var host = "188.0.56.78";
                var port = 11300;
                var client = new fivebeans.client(host, port);
                await client.connect();
                await client.use('test_task',function(err, tubename) {});
                // await client.use('test',function(err, tubename) {});
                await client.put(1, 0, 5000, JSON.stringify(dataStr), function(err, jobid) {});
    
                result = "正在执行task";
            }else{
                result = "备份可能造成网元高负荷,要求必须在凌晨2到5点进行操作.";
            }
        }else{
            result = "task不存在";
        }
    
        return result;
    }
    
    judgeTime(task){
        var inTime = true;
        var type = "BACKUP_INFORMATION_FAULT";
        if(type == task.type){
            var date = new Date();
            var hour = date.getHours();
            if(hour > 5 || hour < 2){
                inTime = false;
            }
        }
        return inTime;
    }
}

module.exports = BatchService;