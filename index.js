"use strict";

var promiseCount = 0;
async function testPromise() {

    console.log('1 log')

    // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
    var p1 = new Promise(
        // a função resolve() é chamada com a capacidade para resolver ou 
        // rejeitar a promise
        function (resolve, reject) {
            console.log('2 log');
            // Isto é apenas um exemplo para criar assincronismo

            if (promiseCount == 0) {
                setTimeout(
                    function () {
                        // Cumprimos a promessa !
                        resolve('3 log')
                    }, Math.random() * 2000 + 1000);
            } else {
                setTimeout(
                    function () {
                        // Cumprimos a promessa !
                        reject('erro')
                    }, Math.random() * 2000 + 1000);
            }
        });

        var p2 = new Promise(
            // a função resolve() é chamada com a capacidade para resolver ou 
            // rejeitar a promise
            function (resolve, reject) {
                console.log('2 log 2');
                // Isto é apenas um exemplo para criar assincronismo
    
                if (promiseCount == 0) {
                    setTimeout(
                        function () {
                            // Cumprimos a promessa !
                            resolve('3 log 2')
                        }, Math.random() * 2000 + 1000);
                } else {
                    setTimeout(
                        function () {
                            // Cumprimos a promessa !
                            reject('erro 2')
                        }, Math.random() * 2000 + 1000);
                }
            });

    // definimos o que fazer quando a promise for realizada
    // p1.then(r => console.log(r)).catch(err => console.log(err) );

    // Promise.all([p1, p2]).then(resultado => console.log(resultado));

    await Promise.race([p1, p2]).then(resultado => console.log(resultado));



    console.log('4 log');
}

testPromise();