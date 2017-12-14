function str2conv(){
	var str = document.getElementById("original").value;
	var conv='';
	for(var i=0;i<str.length;i++){
		var code = str.charCodeAt(i);
		conv += '&#'+code+';';
	}
	document.getElementById("converted").value = conv;
}
function conv2str(){
	var str = document.getElementById("converted").value;
	var conv_regexp = new RegExp("&#([0-9]+);", "gi");
	str = str.unescapeHTML();
	var conv = str.replace(conv_regexp, function (matchedString, subMatch1) {
		return String.fromCharCode(parseInt(subMatch1));
        });
	document.getElementById("original").value = conv;
}

