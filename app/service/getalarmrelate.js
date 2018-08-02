'use strict'

const Service = require('egg').Service;
class GetalarmrelateService extends Service {
    
    async getAlarmRelateByChildFp(childFp) {
        var result = await this.app.mysql.select('Alarm_Relate', { // search posts table
            where: { child_fp: childFp }, // WHERE criteria
            columns: ['child_fp','root_fp','rule','relate_time'], // get the value of certain columns
            orders: [['rule','asc']], // sort order
            limit:1,
          });

        if(result.length) {
            return result;
        }else {
            return null;
        };          
    };

};

module.exports = GetalarmrelateService;