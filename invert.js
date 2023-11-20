
function invert(obj) 
{
    let output={};
    for(i in obj)
    {
        output[obj[i]]=i;
    }

    return output;
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
}
module.exports=invert;
