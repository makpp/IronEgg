'use strict'

const Service = require('egg').Service;

class RelatealarmService extends Service {
    async relateAlarm(childFp,rootFp,rule) {
        var nowDate = getNowFormatDate();
        var sql = "insert into Alarm_Relate(child_fp, root_fp, rule, relate_time) values(?,?,?,?)"
        var result = await this.app.mysql.query(sql,[childFp,rootFp,rule,nowDate]);  
        if(result.length) {
            return result;
        }else {
            return null;
        };     
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

module.exports = RelatealarmService;