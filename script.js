<<<<<<< HEAD
SC.initialize( {
    client_id: 'adasd'
} );
document.querySelector( '.buscarCancion' ).addEventListener( 'submit', function ( event ) {
    event.preventDefault();
    console.log( event.target.busqueda.value );
    SC.get( '/tracks', {
            q: event.target.busqueda.value
        } )
        .then( function ( res ) {
            console.log( res )
            for ( let i = 0; i < res.length; i++ ) {
                const imagen = document.createElement( 'img' )
                imagen.src = res[ i ].artwork_url
                document.querySelector( '.results' ).append( imagen )
            }
        } )
} )
=======
SC.initialize({ 
    client_id: 'pruebacommitx3'

});
document.querySelector('.buscarCancion').addEventListener('submit', function(event) {
            SC.initialize({
                client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb555'
            });
            document.querySelector('.buscarCancion').addEventListener('submit', function(event) {
                event.preventDefault();
                console.log(event.target.busqueda.value);
                SC.get('/tracks', {
                        q: event.target.busqueda.value
                    })
                    .then(function(res) {
                        console.log(res)
                        for (let i = 0; i < res.length; i++) {
                            const imagen = document.createElement('img')
                            imagen.src = res[i].artwork_url
                            document.querySelector('.results').append(imagen)
                        }
                    })
            })
            SC.initialize({
                client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb555'
            });
            document.querySelector('.buscarCancion').addEventListener('submit', function(event) {
                event.preventDefault();
                console.log(event.target.busqueda.value);
                SC.get('/tracks', {
                        q: event.target.busqueda.value
                    })
                    .then(function(res) {
                        console.log(res)
                        for (let i = 0; i < res.length; i++) {
                            const imagen = document.createElement('img')
                            imagen.src = res[i].artwork_url
                            document.querySelector('.results').append(imagen)
                        }
                    })
            })

            function saludo() {
                console.log("Hola chavales");
            }
>>>>>>> 23641f530ec4ea22b7d190443b56f0a7877081a0
