'use strict'

const Service = require('egg').Service;

class EventService extends Service {
    async getEventForTime(startTime) {
        
            var sql = "SELECT max(es.state)as state ,e.* FROM robot.R_Event e, robot.Event_State es "
                    + "WHERE es.event_id = e.event_id and e.start_time > ? "
                    + "GROUP BY es.event_id;";
            var statTimeDate = new Date(startTime*1000);
            var result = await this.app.mysql.query(sql, [statTimeDate]);
            return result;
      
    }
}

module.exports = EventService;