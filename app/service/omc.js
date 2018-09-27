'use strict'

const Service = require('egg').Service;

class OmcService extends Service {
    async omcReceiver(query) {
        var upTime = new Date();
        var sql = 'select Id from omc_record.omc where recordid = ?';
        var result = await this.app.mysql.query(sql,[query.recordid]);
        if(result==null || result.length==0){
            result = await this.app.mysql.insert('omc_record.omc',{uptime:upTime,callStartTime:query.callStartTime,callEndTime:query.callEndTime,callingNo:query.callingNo,calledNo:query.calledNo,calltext:JSON.stringify(query.calltext),recordurl:query.recordurl,recordid:query.recordid,channel:query.channel});
        }
        else{
            await this.app.mysql.delete('omc_record.omc',{recordid:query.recordid});
            result = await this.app.mysql.insert('omc_record.omc',{uptime:upTime,callStartTime:query.callStartTime,callEndTime:query.callEndTime,callingNo:query.callingNo,calledNo:query.calledNo,calltext:JSON.stringify(query.calltext),recordurl:query.recordurl,recordid:query.recordid,channel:query.channel});
        }
        return result;
        // var result = await this.app.mysql.insert('omc_record.omc',{uptime:upTime,callStartTime:query.callStartTime,callEndTime:query.callEndTime,callingNo:query.callingNo,calledNo:query.calledNo,calltext:JSON.stringify(query.calltext),recordurl:query.recordurl,recordid:query.recordid,channel:query.channel});
        // console.log(result);
    }

    async getOmcRecordByStarttime(startTime,endTime){
        var sql = 'select id,callStartTime,callingNo,calledNo,calltext,recordurl,channel from omc_record.omc where callStartTime between ? and ? order by callStartTime desc';
        var result = await this.app.mysql.query(sql,[startTime,endTime]);
        console.log(result);
        for(var i = 0 ; i<result.length; i++){
            var callStartTime = result[i].callStartTime;
            result[i].callStartTime = callStartTime.getTime();
        }
        return result;
    }

    async setRelateEvent(eventId, omcId){
        await this.app.mysql.delete('omc_record.relate_event',{event_id:eventId});
        await this.app.mysql.insert('omc_record.relate_event',{event_id:eventId,omc_id:omcId});
    }

    async getRelateEvent(eventId){
        var result = await this.app.mysql.get('omc_record.relate_event',{event_id:eventId});
        return result;
    }
}

module.exports = OmcService;