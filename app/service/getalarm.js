'use strict'

const Service = require('egg').Service;
class GetalarmService extends Service {
    
    async getAlarmByEqpLabel(ne,group,event_time,timewin,before,clear) {
        var after_time = parseInt(timewin)*1000;
        if (before == true) {
          after_time = 0;  
        };

        var start_time = formatDate(new Date(parseInt(event_time) - after_time), "yyyy-MM-dd hh:mm:ss");
        var end_time = formatDate(new Date(parseInt(event_time) + parseInt(timewin)*1000), "yyyy-MM-dd hh:mm:ss");
        var sql = "select a.fp, a.event_time, a.title_text, a.eqp_label from Alarm a where a.event_time < ? and a.event_time > ? and a.eqp_label = ? ";
        var result_alarm = await this.app.mysql.query(sql,[end_time,start_time,ne]);
        
        if (clear === 'true') {
            var sql_1 = "select a.fp, a.event_time, a.title_text, a.eqp_label,a.cancel_time from Clear_Alarm a where a.event_time < ? and a.event_time > ? and a.eqp_label = ?";
            var result_clearalarm = await this.app.mysql.query(sql_1,[end_time,start_time,ne]);
            var result_alarm = result_alarm.concat(result_clearalarm); 
        };
        
        var result_group = await this.app.redis.smembers(group);
        var result = new Array();
        for(var i=0;i<result_alarm.length;i++){
            for (var j=0;j<result_group.length;j++) {
                if (result_alarm[i].title_text == result_group[j]) {
                    result.push(result_alarm[i]);
                };
            };
        };

        return result;
    };

    async getAlarmByNeLabel(ne,group,event_time,timewin,before,clear) {
        var after_time = parseInt(timewin)*1000;
        if (before == true) {
          after_time = 0;  
        };

        var start_time = formatDate(new Date(parseInt(event_time) - after_time), "yyyy-MM-dd hh:mm:ss");
        var end_time = formatDate(new Date(parseInt(event_time) + parseInt(timewin)*1000), "yyyy-MM-dd hh:mm:ss");
        var sql = "select a.fp, a.event_time, a.title_text, a.eqp_label from Alarm a where a.event_time < ? and a.event_time > ? and a.ne_label = ?";
        var result_alarm = await this.app.mysql.query(sql,[end_time,start_time,ne]);
        
        if (clear === 'true') {
            var sql_1 = "select a.fp, a.event_time, a.title_text, a.eqp_label,a.cancel_time from Clear_Alarm a where a.event_time < ? and a.event_time > ? and a.ne_label = ?";
            var result_clearalarm = await this.app.mysql.query(sql_1,[end_time,start_time,ne]);
            var result_alarm = result_alarm.concat(result_clearalarm); 
        };
        
        var result_group = await this.app.redis.smembers(group);
        var result = new Array();
        for(var i=0;i<result_alarm.length;i++){
            for (var j=0;j<result_group.length;j++) {
                if (result_alarm[i].title_text == result_group[j]) {
                    result.push(result_alarm[i]);
                };
            };
        };

        return result;
    };

    async getAlarmByRoom(room,group,event_time,timewin,before,clear) {
        var after_time = parseInt(timewin)*1000;
        if (before == true) {
          after_time = 0;  
        };

        var start_time = formatDate(new Date(parseInt(event_time) - after_time), "yyyy-MM-dd hh:mm:ss");
        var end_time = formatDate(new Date(parseInt(event_time) + parseInt(timewin)*1000), "yyyy-MM-dd hh:mm:ss");
        var sql = "select a.fp, a.event_time, a.title_text, a.special_field22,a.ne_label from Alarm a where a.event_time < ? and a.event_time > ? and a.vendor_name <> '铁塔公司' and a.special_field22 = ?";
        var result_alarm = await this.app.mysql.query(sql,[end_time,start_time,room]);
        
        if (clear === 'true') {
            var sql_1 = "select a.fp, a.event_time, a.title_text, a.special_field22, a.ne_label,a.cancel_time from Clear_Alarm a where a.event_time < ? and a.event_time > ? and a.vendor_name <> '铁塔公司' and a.special_field22 = ?";
            var result_clearalarm = await this.app.mysql.query(sql_1,[end_time,start_time,room]);
            var result_alarm = result_alarm.concat(result_clearalarm); 
        };
        
        var result_group = await this.app.redis.smembers(group);
        var result = new Array();
        for(var i=0;i<result_alarm.length;i++){
            for (var j=0;j<result_group.length;j++) {
                if (result_alarm[i].title_text == result_group[j]) {
                    result.push(result_alarm[i]);
                };
            };
        };

        return result;
    };

    async getAlarmBySite(site,group,event_time,timewin,before,clear) {
        var after_time = parseInt(timewin)*1000;
        if (before == true) {
          after_time = 0;  
        };

        var start_time = formatDate(new Date(parseInt(event_time) - after_time), "yyyy-MM-dd hh:mm:ss");
        var end_time = formatDate(new Date(parseInt(event_time) + parseInt(timewin)*1000), "yyyy-MM-dd hh:mm:ss");
        var sql = "select a.fp, a.event_time, a.title_text, a.eqp_label,a.ne_label from Alarm a where a.event_time < ? and a.event_time > ? and a.vendor_name = '铁塔公司' and a.ne_label = ?";
        var result_alarm = await this.app.mysql.query(sql,[end_time,start_time,site]);
        
        if (clear === 'true') {
            var sql_1 = "select a.fp, a.event_time, a.title_text, a.eqp_label,a.ne_label,a.cancel_time from Clear_Alarm a where a.event_time < ? and a.event_time > ? and a.vendor_name = '铁塔公司' and a.ne_label = ?";
            var result_clearalarm = await this.app.mysql.query(sql_1,[end_time,start_time,site]);
            var result_alarm = result_alarm.concat(result_clearalarm); 
        };
        
        var result_group = await this.app.redis.smembers(group);
        var result = new Array();
        for(var i=0;i<result_alarm.length;i++){
            for (var j=0;j<result_group.length;j++) {
                if (result_alarm[i].title_text == result_group[j]) {
                    result.push(result_alarm[i]);
                };
            };
        };

        return result;
    };
};

function formatDate(d, fmt) {
    var o = {
        "M+": d.getMonth() + 1, //月份 
        "d+": d.getDate(), //日 
        "h+": d.getHours(), //小时 
        "m+": d.getMinutes(), //分 
        "s+": d.getSeconds(), //秒 
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
        "S": d.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

module.exports = GetalarmService;