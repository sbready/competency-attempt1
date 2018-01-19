
let id = 0;
let text = [];

module.exports = {

    info_catch ( req, res ) {
        let user = db.find_user()                               //76E
        res.status( 200 ).send( user )
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