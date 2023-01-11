

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.send({message: 'this is the public GET request'})
    }
  }
  