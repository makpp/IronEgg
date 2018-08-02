'use strict'

const Service = require('egg').Service;

class AlarmService extends Service {
    async getCurrentAlarmProcess22() {
        try {
           var sql = 'select * from Alarm_Process b where b.state=22';
           var result = await this.app.mysql.query(sql);
           return result;
       }catch(err) {
           this.logger.error(err);
           return {};
       }
       
    }

    async getCurrentAlarmTask(startTime) {
        try {
            // var sql = "select a.* from robot.Alarm `a` "
            //          +"inner join robot.Task `t` on a.fp = t.taskid "
            //          +"inner JOIN robot.Filter_Alarm `fa` ON `fa`.fp =`a`.fp "
            //          +"where a.event_time >= ? and t.state = 0 and `fa`.filterid <> 1055496149;";
            var sql = "select a.org_severity,a.event_time,a.city_name,a.eqp_label,a.title_text,"
                     +"a.remote_eqp_label,a.special_field10,a.vendor_name,a.special_field16,"
                     +"a.alarm_resource_status,a.ne_status,a.locate_info,a.eqp_object_class,"
                     +"a.professional_type,a.org_type,a.alarm_act_count,a.fp " 
                     +"from robot.Alarm `a` "
                     +"inner join robot.Task `t` on a.fp = t.taskid "
                     +"inner JOIN robot.Filter_Alarm `fa` ON `fa`.fp =`a`.fp "
                     +"where a.event_time >= ? and t.state = 0 and `fa`.filterid <> 1055496149;";
            var result = await this.app.mysql.query(sql,[startTime]);
            var test = result[0];
            for(var i = 0; i < result.length; i++){
                var time = result[i].event_time.valueOf();
                result[i].event_time = time;
            }
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }

    async getAlarmProcessLogByfp(fp) {
        try {
            var sql = "select * from Alarm_Process where fp = ? ";
            var result = await this.app.mysql.query(sql,[fp]);
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }

    async loadClearAlarm(filterid, event_time) {
        try {
            var sql = "select '' as `Robot`,`ap`.`taskid`,`ap`.`process_log` as `Robot_Result`,`ap`.`state`,`ap`.`human_process` as `Human`,`ca`.* from Clear_Alarm `ca` \n"
            + "	left join Clear_Filter_Alarm `cfa` on `ca`.fp = cfa.fp \n"
            + "	left join `Alarm_Process` `ap` on `ca`.`fp` = `ap`.`fp`  \n"
            + " where `cfa`.filterid = ? and event_time > ?";
            var result = await this.app.mysql.query(sql,[filterid, event_time]);
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }

    async loadHumanOperLogByfp(fp) {
        try {
            var sql = "select * from HumanOperLog where alarm_fp=? order by process_time asc";
            var result = await this.app.mysql.query(sql,[fp]);
            for(var i = 0; i < result.length; i++){
                var time = result[i].alarm_time.valueOf();
                result[i].alarm_time = time;
                time = result[i].process_time.valueOf();
                result[i].process_time = time;
            }
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }

    async loadAlarmProcess(startTime) {
        try {
            var sql = "select b.* from Alarm a, Alarm_Process b where a.fp = b.fp and a.event_time>=? order by a.event_time asc";
            var result = await this.app.mysql.query(sql,[startTime]);
            for(var i = 0; i < result.length; i++){
                var time = result[i].processtime.valueOf();
                result[i].processtime = time;
            }
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }

    async updateAlarmProcess(human_process,state,fp,process_log) {
        try {
            var sql = "update Alarm_Process set human_process =? ,state=?,process_log=? where fp = ? ";
            var result = await this.app.mysql.query(sql,[startTime]);
            return result;
        }catch(err) {
            this.logger.error(err);
            return {};
        }
    }
}

module.exports = AlarmService;