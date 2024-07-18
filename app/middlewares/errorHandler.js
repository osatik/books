const errorHandler = (err,req,res,next)=>{
    const statusCode = res.manuelStatus || res.statusCode || 500;
res.status(statusCode).json({
    error:true,
    message: err.message,
    stack: err.stack
})

} 

module.exports = errorHandler