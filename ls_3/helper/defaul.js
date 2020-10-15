global.get = (variable ,defaultValue) =>{ 
    if(typeof(variable) == 'undefined') return defaultValue;
    return variable;
}
