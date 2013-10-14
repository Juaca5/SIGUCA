/** SIGUCA  
 *
 *		API del Empleado
 *				crea - Crea nuevo Empleado
 *				registra - Registra Empleado
 *				buscaPorCedula - Busca a un Empleado por c�dula
 *				lista - Lista a todos los Empleados
 *
**/

var Empleado = require('../models/Empleado.js');

// Crea nuevo Empleado
exports.crea = function(req, res) {
	var empleado = new Empleado(req.body);
	empleado.save(function (err) {
		if (err) {
			return res.render('empleado', {
				errors: utils.errors(err.errors),
				empleado: empleado,
				title: 'Intente el registro de nuevo'
			})
		}
		return res.redirect('/')
	});				
}
								
exports.registra = function (req, res) {
  res.render('empleado', {
    title: 'SIGUCA - Administraci�n de Empleados',
    empleado: new Empleado()
  })
}


// Busca Empleado por C�dula
exports.buscaPorCedula = (function(req, res) {
	Empleado.findOne({cedula: req.params.cedula});
});

// Lista a todos los Empleados
exports.lista = function(req, res) {
	Empleado.find(function(err, empleados) {
		res.send(empleados);
	});
}