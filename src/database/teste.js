const Database = require('./db');
const saveGamerhouse = require('./saveGamerhouse');

Database.then(async (db) =>{
    //inserir dados na tabela
//     await saveGamerhouse(db, {
//         lat:"-3.7546567",
//         lng:"-38.6789697",
//         name: "guto",
//         about: "somente pra xerox",
//         whatsapp:"804345038",
//         images: [
//            "https://i.pinimg.com/originals/14/af/e8/14afe8ca9595e5160b0c02e18085077f.png",
//            "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/o-que-e-html.png"
//        ].toString(),
   
//        instructions: "não faça barulho",
//        opening_hours: "abrimos de 7horas até 19horas",
//        open_on_weekends: "0" 
//    },)

   //consultar dados da tabela
   // const selectGamerhouses = await db.all("SELECT * FROM gamerhouses")
   // console.log(selectGamerhouses) 

   // consultar somente 1 gamerhouse, pelo id 
//    const gamerhouse = await db.all('SELECT * FROM gamerhouses WHERE id = "3"')
//    console.log(gamerhouse)

   //deletar dado da tabela 
   //  console.log (await db.run("DELETE FROM gamerhouses WHERE id = '8'"))
   //  console.log (await db.run("DELETE FROM gamerhouses WHERE id = '9'"))
//    console.log (await db.run("DELETE FROM gamerhouses WHERE id = '3'"))
})