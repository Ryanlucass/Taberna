const Database = require('./database/db');
const saveGamerhouse = require ('./database/saveGamerhouse');

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async bestplaces(req, res){
        try {
            const db = await Database;
            const bestplaces = await db.all("SELECT * FROM gamerhouses")
            return res.render('bestplaces', {bestplaces})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

     async gamerhouse(req,res) {

        const id = req.query.id

      try { 
            const db = await Database;
            const results = await db.all(`SELECT * FROM gamerhouses WHERE id = "${id}"`)
            const gamerhouse = results[0]
           
            gamerhouse.images = gamerhouse.images.split(",")
            gamerhouse.firstImage = gamerhouse.images[0]

            if(gamerhouse.open_on_weekends == "0"){
               gamerhouse.open_on_weekends = false
            }else{
                gamerhouse.open_on_weekends = true
            }
 
            return res.render('gamerhouse', { gamerhouse })    
        } catch (error) {

           console.log(error);
           return res.send('Erro no banco de dados!')
      }
    },

    createGamerhouse(req, res){
        return res.render('create-gamerhouse')
    }, 

    async saveGamerhouse(req, res) {
        const fields = req.body

        // validar se todos os campos estão preenchidos 
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos')
        }


        try {
        //salvar a lanhouse
        const db = await Database
        await saveGamerhouse(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            imagens: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,
        })

        //redirecionamento
        return res.redirect('/bestplaces')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        //salvar uma gamerhouse
        

    }

}  