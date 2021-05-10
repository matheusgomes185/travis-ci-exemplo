// Vamos usar a lib assert, que já
// vem no core do Node.js
var assert = require('assert');

// E também vamos incluir o arquivo
var hello = require('../src/hello');

// Descrevemos um tópico inicial usando
// o método describe() do Mocha
describe('Testes gerais do arquivo hello.js', function(){

    it('Executando o arquivo hello.js', function(){
        assert.equal(hello(), "Hello Travis CI!");
    });

});