
let id = 0;
let text = [];

module.exports = {

    read ( req, res ) {
        let user = req.query.                             //76E
        res.status( 200 ).send( user )
    },

    read2 ( req, res ) {
        var make = req.query.make
        console.log(make)
        res.send(make.getMake("accord"))
    },

    create (req, res) {
        let newInfo = {
            id: id,
            text: req.body.text
        }
        id++;
        text.push(newInfo)
        res.status(200).send(text)
    },

    update(req, res){
        let id = parseInt(req.params.id, 10)
        let newInfo = text.filter( function(text) {
            return text.id === id;
        })
        newInfo[0].text = req.body.text
    },

    delete(req,res) {                                           //76D
        let id = parseInt(req.params.id, 5)
        text = text.filter( text => text.id !== id) 
        res.status(200).send(text)
    }
}