//This will be executed when de doc is generated.
$(document).ready(function () {

	var
		characters = [
			"goku",
			"krilin",
			"picollo",
			"n° 16",
			"n° 17",
			"n° 18",
			"n° 19",
			"cell",
			"bulma",
			"vegeta",
			"freezer",
			"trunks",
			"yamcha",
			"raditz",
			"bilss"
		],
		arrLen = 30,
		exampleArr = [];

	$('#generate-button').click(generate);
	$('#count-button').click(count);

	generate();

	function generate() {
		var t;
		exampleArr = [];
		for(t=0; t<arrLen; t++) {
			var randomIndex = Math.round(Math.random()*(characters.length - 1));
			exampleArr.push(characters[randomIndex]);
		}

		console.log("Generated: " + exampleArr);
		redrawExampleArray();
	}

	function redrawExampleArray() {
		redrawArr('#example-arr', exampleArr);
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

	function redrawCounters(countersMap) {

		var container = $(".ejemplo .result .result-container");

		container.html("");

		countersMap.forEach((count, element) => {

			var countHtml = jQuery('<div/>', {
				class: 'count-row'
			}).appendTo(container)

			jQuery('<span/>', {
				class: "count-tittle",
				html: element
			}).appendTo(countHtml);

			jQuery('<span/>', {
				class: "count",
				html: count
			}).appendTo(countHtml);
		})
	}


	/**************************
	 * Complete this function *
	 **************************/

	function count() {
		
	}

})