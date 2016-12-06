var gulp = require('gulp');
const child_process = require('child_process');
var workerProcess;

gulp.task('default',['run_test'] ,function(){
    console.log('run default')
})

gulp.task('run_test', function(){
    gulp.watch(['src/**','test/**'])
        .on('change', function( ){
            runTest( )
        })
    runTest( );
})

function runTest( ) {
    try{ if( workerProcess!==undefined || workerProcess!==null ) {workerProcess.kill( );} }catch(e) {  }
    workerProcess = child_process.exec( 
        'mocha --compilers ts:ts-node/register ./test/**/*.test.tsx --require ./config/dom.env.js', function( error, stdout, stderr ) {
         if ( error ) { console.log( error.stack )}
         console.log( stdout );
         console.log( stderr )
    })
}