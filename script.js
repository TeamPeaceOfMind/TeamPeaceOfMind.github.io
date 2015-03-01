function getInputs() {
	var inputs = {}
	$('[type="text"]').each(function(){
		inputs[$(this).attr('id')] = $(this).val();
	});
	return inputs;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$().ready(function() {
	$('[type="text"]').each(function(index, elem) {
		$('#' + elem.id).val(getParameterByName(elem.id));
	});
	$("#cancelButton").click(function() {
		location.href = "pebblejs://close";
	});
	$("#submitButton").click(function() {
		location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(getInputs()));
		//var newLocation = "pebblejs://close#" + encodeURIComponent(JSON.stringify(getInputs()));
		//location.href = newLocation;
		//location.href = "pebblejs://close";
	});
	var obj = jQuery.parseJSON(decodeURIComponent(window.location.search.substring(1)));
	// for(key in obj) {
	// 	$("#" + [key]).val(obj[key]);
	// 	$("#" + [key]).val(obj[key]).slider("refresh");
	// }
});