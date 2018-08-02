'use strict'

const Service = require('egg').Service;

class EventService extends Service {
    async getEventForTime(startTime) {
        try {
           var sql = 'select * from Alarm_Process a where a.fp = ?';
           var result = await this.app.mysql.query(sql, [fp]);
           return result;
       }catch(err) {
           this.logger.error(err);
           return {};
       }
    }
}

module.exports = EventService;