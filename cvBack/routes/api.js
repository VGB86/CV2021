const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');

const apiRouterProyectos = require('./api/proyectos');
const middleware = require ('./middleware');

router.use('/proyectos', middleware.checkTocken,apiRouterProyectos);

router.get('/token', (req, res)=>{
    let payload = {
        usuario:'Virginia',
        cratedAt: moment().unix(),
        expiredAt: moment().add(3,'minutes').unix()
    }; 
    const token = jwt.encode(payload, process.env.SECRET_KEY);
    console.log(token);
    res.json({ token })
});

module.exports = router;