
SPOC.Utils.Conversion = {};

/**
 * Converts a Javascript object to SP API query string format
 * @params  obj Object of props to convert
 * @return  string
 */
SPOC.Utils.Conversion.objToQueryString = function(obj) {
    var str = '';

    for (var propertyName in obj) {
        str += '&$' + propertyName + '=' + obj[propertyName];
    }

    return str;
};

/**
 * Converts a column name to the internal REST safe version
 * @params  string to convert
 * @return  string
 */
SPOC.Utils.Conversion.spInternalName = function(string) {
    return str.replace(/ /g, '_x0020_');
};
