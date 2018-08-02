'use strict'

class returnUtils {

    retMissingParam(){
        return {code : 1,
                msg  : "Missing parameters"};
    }

    retSuccess(result){
        return {code : 0,
                msg  : "Get data successfully",
                data : result};
    }

    retOmcError(){
        return {status : "0",
                Msg    : 'ERROR'};
    }

    retOmcSuccess(){
        return {status : "1",
                Msg    : 'SUCCESS'};
    }
}

module.exports = new returnUtils();