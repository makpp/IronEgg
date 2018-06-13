'use strict'

const Service = require('egg').Service;

class EventService extends Service {
        async getEventForTime(startTime) {
        
            var sql = "SELECT max(es.state)as state ,e.* FROM robot.R_Event e, robot.Event_State es "
                    + "WHERE es.event_id = e.event_id and e.start_time > ? "
                    + "GROUP BY es.event_id;";
            var statTimeDate = new Date(startTime*1000);
            var result = await this.app.mysql.query(sql, [statTimeDate]);
            for(var i=0; i<result.length; i++){
                var varlist = JSON.parse(result[i].varlist);
                result[i].ne = varlist.ne;
                result[i].city_name = varlist.city_name;
            }
            return result;
        }

        async getEventInfo(eventId){
            var result = await this.app.mysql.get("R_Event",{event_id:eventId});
            return result;    
        }

        async getCurrentEventState(eventId) {
            var sql = "select e.* from Event_State e where e.event_id = ? AND e.state like '%.0' GROUP BY e.state";
            var result = await this.app.mysql.query(sql, [eventId]);
            return result;
        }

        
}

module.exports = EventService;