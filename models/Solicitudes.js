/** SIGUCA 
 *
 *  Modelo de Solicitudes
 *  Schedule model
 *
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var SchemaSolicitudes = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    tipoSolicitudes: { //día libre - tadía
        type: String,
        default: ''
    },
    diaInicio: {
        type: String,
        default: ''
    },
    diaFinal: {
        type: String,
        default: ''
    },
    horaFinal: { 
        type: String,
        default: ''
    },
    fechaCreada: { //epoch
        type: Number,
        default: ''
    },
    motivo: {
        type: String,
        default: ''
    },
    estado: {
        type: String,
        default: 'Pendiente'
    }
});

module.exports = mongoose.model('Solicitudes', SchemaSolicitudes);