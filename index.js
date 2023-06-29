function receivesAFunction(callback){
   callback();
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return (a, b)=>{
        a + b
    }
}