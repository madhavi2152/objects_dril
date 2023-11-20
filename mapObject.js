
function mapObject(obj, cb) {
    let output=[];
    for(i in obj)
    {
        output.push(cb(obj[i]));
    }

    return output;
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
}
module.exports=mapObject;