function values(obj) {
    let extracted_values=[];
    for(i in obj)
    {
        extracted_values.push(obj[i]);
    }
    return extracted_values;
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
}
module.exports=values;