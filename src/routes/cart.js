const express = require('express')
const router = express.Router()
const cartControllers = require('../Controllers/cartControllers')
const accesoUsuarios = require('../middleware/accesoUsuarios')

router.get('/' , cartControllers.home )

router.post('/' , cartControllers.store)

router.get('/payment', accesoUsuarios , cartControllers.pay)

router.post('/delete/:id' , cartControllers.delete) 

router.get('/pagoExitoso' , cartControllers.successfull)

router.get('/probarpago' , accesoUsuarios, cartControllers.probarPago)

router.get('/aprobado' , accesoUsuarios, cartControllers.aprobado)

module.exports = router