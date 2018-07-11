'use strict'

const Service = require('egg').Service;
class ComplainService extends Service {
    async getComplainByCitys(cityList,factBeginTimeDate) {
        var sql = "select * from Complain where IssueTime > ? and IssueTitle like";
        for (var i = 0; i < cityList.length; i++) {
            if (i == 0) {
                sql = sql + "'%" + cityList[i] + "%'";
            } else {
                sql = sql + " or IssueTitle like '%" + cityList[i] + "%'";
            }
        }
        var result = await this.app.mysql.query(sql, [factBeginTimeDate]);
        return result;
    }
}

module.exports = ComplainService;