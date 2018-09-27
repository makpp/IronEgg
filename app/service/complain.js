'use strict'

const Service = require('egg').Service;
class ComplainService extends Service {
    async getComplainByCitys(cityList,factBeginTimeDate) {
        var sql = "select * from Complain where IssueTime > ? and (IssueTitle like";
        for (var i = 0; i < cityList.length; i++) {
            if (i == 0) {
                sql = sql + "'%" + cityList[i] + "%'";
            } else {
                sql = sql + " or IssueTitle like '%" + cityList[i] + "%'";
            }
        }
        sql += ');';
        var result = await this.app.mysql.query(sql, [factBeginTimeDate]);
        for(var i=0; i<result.length; i++){
            var dateTime = result[i].IssueTime;
            if(dateTime){
                result[i].IssueTime = dateTime.getTime();
            }else{
                result[i].IssueTime = new Date('1982-01-01 00:00:00').getTime();
            }
            dateTime = result[i].UpdateTime;
            if(dateTime){
                result[i].UpdateTime = dateTime.getTime();
            }else{
                result[i].IssueTime = new Date('1982-01-01 00:00:00').getTime();
            }            
        }
        return result;
    }

    async setRelateEvent(eventId, issueId){
        await this.app.mysql.delete('robot_kafka.relate_issue',{event_id:eventId});
        await this.app.mysql.insert('robot_kafka.relate_issue',{event_id:eventId,issue_no:issueId});
    }

    async getRelateEvent(eventId){
        //var result = await this.app.mysql.get('robot_kafka.relate_issue',{event_id:eventId});
        var sql = 'select * from robot_kafka.relate_issue where event_id = ?';
        var result = await this.app.mysql.query(sql,[eventId]);
        return result[0];
    }
}

module.exports = ComplainService;
