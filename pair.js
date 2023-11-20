
function pairs(obj) {
    let pairs_array=[];
    for(i in obj)
    {
        let a=[i,obj[i]];
        pairs_array.push(a);
    }
    return pairs_array;
    
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
}
module.exports=pairs;
