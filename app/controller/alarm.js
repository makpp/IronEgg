'use strict'

// const redis = require('./lib/redis');
const Controller = require('egg').Controller;
// const retUtils = require('./controllerUtils');
const retUtils = require('./returnUtils');



class AlarmController extends Controller {
  async getAlarmByEqpLabel() {
    const query= this.ctx.query;
    if(query.ne && query.group && query.event_time && query.timewin) {
        var ne = query.ne;
        var group = query.group;
        var event_time = query.event_time;
        var timewin = query.timewin;
        var before = false;
        var clear = false;
        //var port = '';

        if ("before" in query) {
          var before = query.before;
        };

        if ("clear" in query) {
          var clear = query.clear; 
        };

        // if ("port" in query) {
        //   var port = query.port;
        // };
        
        var result = await this.ctx.service.getalarm.getAlarmByEqpLabel(ne,group,event_time,timewin,before,clear);
        
        var retData = retUtils.retSuccess(result);
        this.ctx.body = retData;
    }else {
        var retData = retUtils.retMissingParam();
        this.ctx.body = retData;
    }; 
  };
  
  async getAlarmByNeLabel() {
    const query= this.ctx.query;
    if(query.ne && query.group && query.event_time && query.timewin) {
        var ne = query.ne;
        var group = query.group;
        var event_time = query.event_time;
        var timewin = query.timewin;
        var before = false;
        var clear = false;
        //var port = '';

        if ("before" in query) {
          var before = query.before;
        };

        if ("clear" in query) {
          var clear = query.clear; 
        };

        // if ("port" in query) {
        //   var port = query.port;
        // };
        
        var result = await this.ctx.service.getalarm.getAlarmByNeLabel(ne,group,event_time,timewin,before,clear);
        
        var retData = retUtils.retSuccess(result);
        this.ctx.body = retData;
    }else {
        var retData = retUtils.retMissingParam();
        this.ctx.body = retData;
    }; 
  };

  async getAlarmByRoom() {
    const query= this.ctx.query;
    if(query.room && query.group && query.event_time && query.timewin) {
        var room = query.room;
        var group = query.group;
        var event_time = query.event_time;
        var timewin = query.timewin;
        var before = false;
        var clear = false;
        //var port = '';

        if ("before" in query) {
          var before = query.before;
        };

        if ("clear" in query) {
          var clear = query.clear; 
        };

        // if ("port" in query) {
        //   var port = query.port;
        // };
        
        var result = await this.ctx.service.getalarm.getAlarmByRoom(room,group,event_time,timewin,before,clear);
        
        var retData = retUtils.retSuccess(result);
        this.ctx.body = retData;
    }else {
        var retData = retUtils.retMissingParam();
        this.ctx.body = retData;
    }; 
  };

  async getAlarmBySite() {
    const query= this.ctx.query;
    if(query.site && query.group && query.event_time && query.timewin) {
        var site = query.site;
        var group = query.group;
        var event_time = query.event_time;
        var timewin = query.timewin;
        var before = false;
        var clear = false;
        //var port = '';

        if ("before" in query) {
          var before = query.before;
        };

        if ("clear" in query) {
          var clear = query.clear; 
        };

        // if ("port" in query) {
        //   var port = query.port;
        // };
        
        var result = await this.ctx.service.getalarm.getAlarmBySite(site,group,event_time,timewin,before,clear);
        
        var retData = retUtils.retSuccess(result);
        this.ctx.body = retData;
    }else {
        var retData = retUtils.retMissingParam();
        this.ctx.body = retData;
    };     
  };

  async getChildAlarmByRootFp() {
    const query= this.ctx.query;
    if(query.rootFp) {
      var rootFp = query.rootFp;
      var result = await this.ctx.service.getchildalarm.getChildAlarmByRootFp(rootFp);
      var retData = retUtils.retSuccess(result);
      this.ctx.body = retData;
    }else {
      var retData = retUtils.retMissingParam();
      this.ctx.body = retData;
    }; 
  };

  async getAlarmRelateByChildFp() {
    const query= this.ctx.query;
    if(query.childFp) {
      var childFp = query.childFp;
      var result = await this.ctx.service.getalarmrelate.getAlarmRelateByChildFp(childFp);
      var retData = retUtils.retSuccess(result);
      this.ctx.body = retData;
    }else {
      var retData = retUtils.retMissingParam();
      this.ctx.body = retData;
    };
  };

  async relateAlarm() {
    const query= this.ctx.query;
    if(query.childFp && query.rootFp && query.rule) {
      var childFp = query.childFp;
      var rootFp = query.rootFp;
      var rule = query.rule;
      var result = await this.ctx.service.relatealarm.relateAlarm(childFp,rootFp,rule);
      var retData = retUtils.retSuccess(result);
      this.ctx.body = retData;
    }else {
      var retData = retUtils.retMissingParam();
      this.ctx.body = retData;
    };
  };  

  async relateNewAlarm() {
    const query= this.ctx.query;
    if(query.childFp && query.rule) {
      var childFp = query.childFp;
      var rule = query.rule;
      var rootFp = query.childFp + 'r';
      var result = await this.ctx.service.relatealarm.relateAlarm(childFp,rootFp,rule);
      var retData = retUtils.retSuccess(result);
      this.ctx.body = retData;
    }else {
      var retData = retUtils.retMissingParam();
      this.ctx.body = retData;
    };
  };



};

module.exports = AlarmController;