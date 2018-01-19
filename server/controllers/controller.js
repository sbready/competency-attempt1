module.exports = {

    info_catch ( req, res ) {
        let user = db.find_user()                               //76E
        res.status( 200 ).send( user )
    },

    create (req, res) {
        let info_catch = {
            id: id,
            text: req.body.text
        }
    },

    update(req, res){
        let id = (req.params.id, 10) * 1
        let m = []
        let messages1 = m.filter( function( m ) {
            return m.id === id
        })
    },

    delete(req,res) {                                           //76D
        let id = (req.params.id, 10) * 1
        let m = []
        m = m.filter( (m) => {
            m.id !== id
        })
        res.status(200).send(m)
    }
}