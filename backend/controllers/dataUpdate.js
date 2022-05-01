'use strict'

//utiliser les procédures...

const updateComportement = (id,result) =>{

    //RECUPERER LES INFORMATIONS D'UN UTILISATEUR
    db.query("UPDATE tb_Comportements SET Signature = 1  WHERE EleveID = ?;", [id], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
            console.log("Request send with success");
        }
    });
}

const updateComportementById = (request, response) =>{
    updateComportement(request.params.id, (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results)
        }
    })
}

module.exports = {
    updateComportementById,
}