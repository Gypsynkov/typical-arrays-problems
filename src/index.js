
exports.min = function min (array) {
    let arr = [];
    if (typeof array!== 'undefined' && array.length > 0){
        return Math.min.apply( Math, array );
    }else{
    
   
  return 0;
    }
}

exports.max = function max (array) {
    if (typeof array!== 'undefined' && array.length > 0){
    return Math.max.apply( Math, array );
   }else{
    
   
    return 0;}
      }
exports.avg = function avg (array) {
    if (typeof array!== 'undefined' && array.length > 0){
    let average =  array.reduce( ( p, c ) => p + c, 0 ) / array.length;
    return average;}
    else { return 0}
}
