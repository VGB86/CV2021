const jwt = require('jwt-simple');
const moment = require ('moment');


exports.checkTocken = ( req, res, next) => {
    if(!req.headers['access-token']){
        return res.status(403).json({error:'Debes incluir la cabecera access-token'})
    }

    const token = req.headers['access-token']
    let payload = null;
    try {
        payload = jwt.encode(token, process.env.SECRET_KEY);
    } catch(error){
        return res.status(403).json({error:'El token incluido es incorrecto'})
    }
    
    if(payload.expiredAt < moment().unix()){
        return res.status(403).json({error:'El token ha expirado'})
    }

    req.payload = payload;

    next();
}