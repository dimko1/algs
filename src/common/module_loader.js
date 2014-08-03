var ALGS = ALGS || {};

ALGS.namespace = function (ns_string) { 
	var parts = ns_string.split('.'), 
		parent = ALGS, 
		i;
	
	if (parts[0] === "ALGS") {
		parts = parts.slice(1); 
	}
	
	for (i = 0; i < parts.length; i += 1) {
		// create a property if it doesn't exist
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {}; 
		}

		parent = parent[parts[i]]; 
	}

	return parent; 
};