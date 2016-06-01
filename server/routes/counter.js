import express from 'express';
import colors from 'colors';


export default function counter(data) { 

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();
    
    router.post('/', (req, res) => {
        console.log(colors.green('[INC]'), ++data.number, getIP(req));
        return res.json({number: data.number});
    });

    router.get('/', (req, res) => {
        console.log(colors.yellow('[REQ]'), data.number, getIP(req));
        return res.json({number: data.number});
    });

    return router;

}



