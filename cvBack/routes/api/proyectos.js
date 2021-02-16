const router = require('express').Router();
const Proyecto = require('../../models/proyectos')
const { body, validationResult} = require('express-validator')

router.get('/', async(req, res)=>{
    try{
        const proyectos = await Proyecto.find()
        res.json(proyectos);
    } catch(error){
        res.status(503).json({'error':error})
    }
});

router.get('/categoria/:categoria', async(req, res)=>{
    try{
        const proyectos = await Proyecto.find({categoria: req.params.categoria});
        res.json(proyectos);
    }catch(error){
        res.status(503).json({'error':error})
    }
});

router.get('/:idProyecto', async(req, res)=>{
    try{
        const proyecto = await Proyecto.findById(req.params.idProyecto);
        res.json(proyecto)
    }catch(error){
        res.status(503).json({'error':error})
    }
})


router.post('/', 
    body('titulo', 'Titulo es obligatorio y minimo de 3 dígitos')
    .exists()
    .notEmpty()
    .isLength({ min: 3 }),
    body('descripcion', 'Titulo es obligatorio y minimo de 3 dígitos')
    .exists()
    .isLength({ min: 3, max:300 }), 
    body('url', 'URL incorrecta').isURL()
,async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        const nuevoProyecto =  await Proyecto.create(req.body)
        res.json(nuevoProyecto)
    } catch (error){
        res.status(503).json({'error':error})
    }
});

router.put('/:proyectoId', async (req, res) => {
    try{
        const proyectoEditado = await Proyecto.findByIdAndUpdate(req.params.proyectoId, req.body, { new:true });
        res.json(proyectoEditado);
    } catch (error){
        res.status(503).json({'error':error})
    }
    
})

router.delete('/:proyectoId', async (req, res) =>{
    try {
        const proyectoBorrado = await Proyecto.findByIdAndDelete(req.params.proyectoId);
        res.json(proyectoBorrado);
    } catch(error) {
        res.status(503).json({ 'error' :error})
    }
});
module.exports = router