var app = require('http').createServer(resposta);
var fs = require('fs');
app.listen(3000);
console.log('o pai ta on...');
function resposta(req, res){
   fs.readFile(__dirname + '/index.html', (err, data) => {
	   if(err){
	       res.writeHead(500);
	       return res.end('Erro ao carregar o arquivo');
	   }
           res.writeHead(200);
	   res.end(data);
	   
   });
}

function hackFoddaste() {
     var baguiDoido = 5
     var naoENaoaaaa = 1000000000000000;
     return naoENaoaaaa;
}

function toTentandoFazerCOias(params) {
     
}

/*var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
     fs.readFile('./index.html', (err, data) =>{
          if(err){
               res.send('Erro ao carregar a pagina');
     } else{
               res.send(data);
     }
})
});

app.listen(3000, function(){
     console.log('Exemple app listening on port 3000!');
});*/
