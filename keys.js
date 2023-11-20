function keys(obj) {
    let keys_array=[];
    for(let i in obj)
    {
        keys_array.push(i);
    }
    
    return keys_array;
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
}

module.exports=keys;