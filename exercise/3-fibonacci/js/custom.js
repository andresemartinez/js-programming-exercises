//This will be executed when de doc is generated.
$(document).ready(function () {

	$('#generate-button').click(generate);
	$('#reset-button').click(reset);

	function redrawExampleIterative(exampleIterative) {
		redrawArr('#example-iterative', exampleIterative);
	}

	function redrawExampleRecursive(exampleRecursive) {
		redrawArr('#example-recursive', exampleRecursive);
	}

	function redrawArr(arrId, arr) {

		$(arrId).html("");

		for(var t = 0; t < arr.length; t ++) {
			jQuery('<div/>', {
				class: "element",
				html: (jQuery('<span/>', {
					html: arr[t]
				}))
			}).appendTo(arrId);
		}

		console.log("Array redrawed");
	}


	/**************************
	 * Complete thease function *
	 **************************/

	function generate() {

	}

	function reset() {

	}

})