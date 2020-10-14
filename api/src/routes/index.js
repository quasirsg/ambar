const { Router } = require("express");
// // import all routers;
const clientRouter = require('./client.js');
const serviceRouter = require('./service.js');
// const categoryRouter = require('./category.js');
// const searchRouter = require('./search.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

router.use('/clients', clientRouter);
router.use('/servicios', serviceRouter);
// router.use('/search', searchRouter);

module.exports = router;