SC.initialize( {
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb555'
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
