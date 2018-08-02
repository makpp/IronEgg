'use strict'

const Service = require('egg').Service;
class GetchildalarmService extends Service {
    
    async getChildAlarmByRootFp(rootFp) {
        var sql = "select ra.*, a.fp, a.eqp_object_class,a.city_name, a.city_name,a.network_type,a.ne_label,a.event_time, a.title_text, a.eqp_label ,a.vendor_name from Alarm a, Alarm_Relate ra where ra.root_fp = ? and a.fp = ra.child_fp group by ra.child_fp";
        var result = await this.app.mysql.query(sql,[rootFp]);

        var sql_clear = "select ra.*, a.fp, a.eqp_object_class,a.city_name, a.city_name,a.network_type,a.ne_label,a.event_time, a.title_text, a.eqp_label ,a.vendor_name ,a.cancel_time from Clear_Alarm a, Alarm_Relate ra where ra.root_fp = ? and a.fp = ra.child_fp group by ra.child_fp";
        var result_clear = await this.app.mysql.query(sql_clear,[rootFp]);

        result = result.concat(result_clear);
        
        if(result.length) {
            return result;
        }else {
            return null;
        };          
    };

};

module.exports = GetchildalarmService;