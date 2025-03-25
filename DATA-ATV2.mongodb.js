const database = 'BD3-NoSQL-AtlasMongoDB'

use(database)

// Update 
 db['bd3-nosql-atv2'].updateOne(
 { cod_aluno: 1},
   {$set: {nome:"Ana Carolina Silva",cpf:"22000000000", rg:"200000000", email:"anacarolina@gmail.com",
           data_nascimento:"2000-02-01 19:40:10"    }}
 ); db['bd3-nosql-atv1'].find( {"cod_aluno":1})


// Delete

db['bd3-nosql-atv2'].deleteOne({cod_aluno: 4});
db['bd3-nosql-atv2'].find( {"cod_aluno":4})

// Listagem

db['bd3-nosql-atv2'].find({email: /@gmail.com/})
