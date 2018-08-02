'use strict'

const Controller = require('egg').Controller;
const retUtils = require('./returnUtils');


class OmcController extends Controller {
  async omcReceiver() {
    const queryRaw = this.ctx.request.body;
    const query = queryRaw.omcJson;
    // const query= this.ctx.query;
    if(query.callStartTime && query.callEndTime && query.callingNo && query.calledNo && query.calltext && query.recordurl && query.recordid && query.channel){
        var result = await this.ctx.service.omc.omcReceiver(query);
        this.ctx.body = retUtils.retOmcSuccess();
    }else{
        this.ctx.body = retUtils.retOmcError();
    }
  }

  async getOmcRecordByStarttime(){
    const query = this.ctx.query;
    if(query.startTime){
      var startTime = new Date(query.startTime*1000);
      var result = await this.ctx.service.omc.getOmcRecordByStarttime(startTime);
      this.ctx.body = retUtils.retSuccess(result);
    }else{
      this.ctx.body = result.retError();
    }
  }

  async setRelateEvent(){
    const query = this.ctx.query;
    if(query.eventId && query.omcId){
      var eventId = query.eventId;
      var omcId = query.omcId;
      await this.ctx.service.omc.setRelateEvent(eventId, omcId);
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
      var result = await this.ctx.service.omc.getRelateEvent(eventId);
      this.ctx.body = retUtils.retSuccess(result);
    }else{
      this.ctx.body = result.retError();
    }
  }
}

module.exports = OmcController;