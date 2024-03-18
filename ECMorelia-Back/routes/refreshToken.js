const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('refresh Token');
});

module.exports = router;