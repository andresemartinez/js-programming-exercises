//This will be executed when de doc is generated.
$(document).ready(function () {

	var
		arrLen = 10,
		exampleArr = [];

	$('#generate-button').click(generate);
	$('#filter-button').click(filter);

	generate();

	function generate() {
		var t;
		exampleArr = [];
		for(t=0; t<arrLen; t++) {
			exampleArr.push(Math.round(Math.random()*100))
		}

		console.log("Generated: " + exampleArr);
		redrawExampleArray();
		redrawEvenArr([]);
		redrawOddArr([]);
	}

	function redrawExampleArray() {
		redrawArr('#example-arr', exampleArr);
	}

	function redrawEvenArr(evenArr) {
		redrawArr('#even-arr', evenArr);
	}

	function redrawOddArr(oddArr) {
		redrawArr('#odd-arr', oddArr);
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
	 * Complete this function *
	 **************************/

	function filter() {

	}

})