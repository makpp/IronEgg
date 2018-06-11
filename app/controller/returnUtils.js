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

}

module.exports = new returnUtils();