'use strict'

const Controller = require('egg').Controller;
const retUtils = require('./returnUtils');

class ComplainController extends Controller {
    async getComplainByCitys() {
        const query = this.ctx.request.body;
        if (query.cityList && query.factBeginTime) {
            var cityListStr = query.cityList;
            var cityList = cityListStr.split(';');
            var factBeginTime = query.factBeginTime*1;
            // var factBeginTimeDate = new Date(factBeginTime*1000);
            var factBeginTimeDate = new Date(factBeginTime);
            // console.log(factBeginTimeDate);
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
            var factBeginTime = query.factBeginTime*1;
            // var factBeginTimeDate = new Date(factBeginTime*1000);
            var factBeginTimeDate = new Date(factBeginTime);
            // console.log(factBeginTimeDate);
            var result = await this.ctx.service.complain.getComplainByCitys(cityList,factBeginTimeDate);
            var retData = retUtils.retSuccess(result);
            this.ctx.body = retData;
        }
        else {
            var retData = retUtils.retMissingParam();
            this.ctx.body = retData;
        }

    }

    async setRelateEvent(){
        const query = this.ctx.query;
        if(query.eventId && query.issueId){
          var eventId = query.eventId;
          var issueId = query.issueId;
          await this.ctx.service.complain.setRelateEvent(eventId, issueId);
          this.ctx.body = {code : 0,
                           msg  : "Set data successfully"};
        }else{
          this.ctx.bday = result.retError();
        }
      }
    
      async getRelateEvent(){
        const query = this.ctx.query;
        if(query.eventId){
          var eventId = query.eventId;
          var result = await this.ctx.service.complain.getRelateEvent(eventId);
          this.ctx.body = retUtils.retSuccess(result);
        }else{
          this.ctx.body = result.retError();
        }
      }
}

module.exports = ComplainController;