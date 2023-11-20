
function defaults(obj, defaultProps)
{
    for (let prop in obj) {
        if (obj[prop] === undefined) {
            obj[prop] = defaultProps[prop];
        }
    }
    return obj;


    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
}
module.exports=defaults;