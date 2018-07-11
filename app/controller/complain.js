'use strict'

const Controller = require('egg').Controller;
const retUtils = require('./returnUtils');

class ComplainController extends Controller {
    async getComplainByCitys() {
        const query = this.ctx.request.body;
        if (query.cityList && query.factBeginTime) {
            var cityListStr = query.cityList;
            var cityList = cityListStr.split(';');
            var factBeginTime = query.factBeginTime;
            var factBeginTimeDate = new Date(factBeginTime*1000);
            var result = await this.ctx.service.complain.getComplainByCitys(cityList,factBeginTimeDate);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
        else {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }

    }
	
	async getComplainByCitysGet() {
        const query = this.ctx.query;
        if (query.cityList && query.factBeginTime) {
            var cityListStr = query.cityList;
            var cityList = cityListStr.split(';');
            var factBeginTime = query.factBeginTime;
            var factBeginTimeDate = new Date(factBeginTime*1000);
            var result = await this.ctx.service.complain.getComplainByCitys(cityList,factBeginTimeDate);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
        else {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }

    }
}

module.exports = ComplainController;