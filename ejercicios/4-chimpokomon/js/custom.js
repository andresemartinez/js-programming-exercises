//This will be executed when de doc is generated.
$(document).ready(function () {

	var
		chimpokomons = [
			"Pengin", "Chu-chu", "Fatdactyl", "Velocirapstar",
			"Roidrat", "Stegmata", "Brocorri", "Gunrilla",
			"Donkeytron", "Beetlebot", "Sna-kat", "Fetuswami",
			"Mouse-Tik", "Shoe", "Ferasnarf", "Flowerpotamus",
			"Cosmonewt", "Vamporko", "Accountafish", "Monkay",
			"Roo-Star", "RabbiTech", "Lambtron", "Biebersaurus",
			"Gerbitoad", "Terribovine", "Gophermon", "Poodlesaurus",
			"Pterdaken", "Furrycat"
		],
		chimpokomonsInfo = [];

	$('#generate-button').click(generateChimpokomonsInfo);
	$('#clear-button').click(clear);
	$('#search-input').on('input', inputChanged)

	generateChimpokomonsInfo();

	function redrawTable(table) {
		$("#example-table .content").html("");

		table.forEach(row => {
			var jqrow = jQuery('<div/>', {
				class: "example-row"
			}).appendTo("#example-table .content");

			jQuery('<div/>', {
				class: "number",
				html: row.get("number")
			}).appendTo(jqrow);

			jQuery('<div/>', {
				class: "name",
				html: row.get("name")
			}).appendTo(jqrow);

			jQuery('<div/>', {
				class: "attack",
				html: row.get("attack")
			}).appendTo(jqrow);

			jQuery('<div/>', {
				class: "defense",
				html: row.get("defense")
			}).appendTo(jqrow);
			
		})
	}

	function getInput() {
		return $('#search-input').val();
	}


	/**************************
	 * Complete this function *
	 **************************/

	 function generateChimpokomonsInfo() {

		var counter = 1;

		chimpokomons.sort().forEach(name => {
			var chimpokomon = new Map();

			chimpokomon.set("number", counter);
			chimpokomon.set("name", name);
			chimpokomon.set("attack", Math.round(Math.random()*10));
			chimpokomon.set("defense", Math.round(Math.random()*10));

			chimpokomonsInfo.push(chimpokomon);

			counter ++;
		})

		redrawTable(chimpokomonsInfo);
	}

	function search(name) {
		var c;
		console.log("Searching " + name);

		c = chimpokomonsInfo.filter(chimpokomon => chimpokomon.get("name").match(name));
		redrawTable(c);
	}

	function inputChanged() {
		search(getInput());
	}

	function clear() {
		$('#search-input').val("");
		redrawTable(chimpokomonsInfo)
	}
})