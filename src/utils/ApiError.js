class ApiError extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.sucess = false ;
        this.errors = error


        if(statck){
            this.statck = statck
        }else{
            Error.captureStatckTrace(this,this.constructor)

        }
    }
}


export{ApiError}