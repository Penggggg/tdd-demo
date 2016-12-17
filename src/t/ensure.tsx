

export let test = ( ) => {
    console.log(`test`);
    require.ensure([],function(require){
            let a = require('./ensure.2');;
            a.test( )
        });
}