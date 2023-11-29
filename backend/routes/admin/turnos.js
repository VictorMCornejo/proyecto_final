var express = require('express');
const { deleteTurno } = require('../../models/turnosModel.js');
var router = express.Router();
var turnosModel=require('../../models/turnosModel.js');

router.get('/', async function(req, res, next) { // PAGINA TURNOS + LISTADO DE TURNOS
  var turnos= await turnosModel.getTurnos();

  res.render('admin/turnos',{
     layout: 'admin/layout',
     turnos
   });
});

router.get('/agregarturno',async function(req,res,next){ // PAGINA AGREGAR TURNO
  var dia=new Date();
  console.log(dia);
  res.render('admin/agregarturno',{
    layout: 'admin/layout',
    persona: req.session.nombre,
    id: req.session.id_usuario,
  })
});

router.get('/consultarturnosdisponibles/:dia',async function(req,res,next){                                        // CONSULTAR TURNOS DISPONIBLES 
  
  var dia=req.params.dia;
  console.log(`* DIA: ${dia} *`);

  //var turnosdisponibles=await turnosModel.consultarTurnosDisponibles(consultardia);
  // res.render('admin/agregarturno',{
  //   layout: 'admin/layout',
  //   persona: req.session.nombre,
  //   id: req.session.id_usuario,
  //   turnosdisponibles
  // })
});


router.get('/eliminar/:id',async function(req,res,next){                                      // DELETE TURNO
   var id = req.params.id;
   await turnosModel.deleteTurno(id);
   res.redirect('/admin/turnos');

});

router.get('/modificar/:id', async function(req,res,next){                            // MODIFICAR TURNO BY ID - SELECCION DEL REGISTRO
  var id=req.params.id;
  var turno=await turnosModel.getTurnoById(id);
  console.log(turno);
  res.render('admin/modificarturno',{
    layout: 'admin/layout',
    tittle: 'MODIFICAR TURNO',
    turno
  })
});

router.post('/modificar', async function(req,res,next){                                        // MODIFICAR TURNO BY ID 
  try{
      var id=req.body.id;  
      console.log(`id: ${id}`)
      var obj={
          dia:req.body.dia,
          hora:req.body.hora,
          id:req.body.id,
          nombre:req.body.nombre,
          dni:req.body.dni,
          email:req.body.email,
        }
        console.log(obj);
            
        await turnosModel.modificarTurnoById(obj,id);  
        res.redirect('/admin/turnos')
    }
  catch(error){
    console.log(error);
    res.render('admin/modificar',{
      layout: 'admin/layout',
      error: true,
      message: 'No se realizo la modificación'
    })
  }
});


router.post('/agregarturno',async function(req,res,next){                           // POST NUEVO TURNO
  try{
    await turnosModel.postTurno(req.body);
    res.redirect('/admin/turnos');
  }
  catch(error){
    console.log(error);
  }
});

module.exports = router;