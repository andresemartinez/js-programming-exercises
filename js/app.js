$(document).ready(function () {

	var
		mainMenu = [
			{
				name: 'Examples',
				order: 1,
				view: 'example',
				categories: [
					{
						name: 'Bubble Sort',
						order: 1,
						view: 'bubble-sort'
					}
				]
			},
			{
				name: 'Exercises',
				order: 2,
				view: 'exercise',
				categories: [
					{
						name: 'Filter',
						order: 1,
						view: '1-filter'
					},
					{
						name: 'Counter',
						order: 2,
						view: '2-counter'
					},
					{
						name: 'Fibonacci',
						order: 3,
						view: '3-fibonacci'
					},
					{
						name: 'Chimpokomon',
						order: 4,
						view: '4-chimpokomon'
					}
				]
			}
		]

	/******************
	 * Initialization *
	 ******************/

 	drawMenu(mainMenu, '#main-menu', '/');


 	/*************
 	 * Functions *
 	 *************/

	function drawMenu(menu, id, fatherView) {
		var menuComponent = $(id);

		drawCategories(mainMenu, menuComponent, fatherView);
	}

	function drawCategories(categories, fatherComponent, fatherUrl) {

		var categoryContainer = jQuery('<ul/>')
			.appendTo(fatherComponent);

		categories
			.sort((a, b) => a.order - b.order )
			.forEach(category => {

				var viewUrl = createViewUrl(fatherUrl, category.view);

				var categoryComponent = jQuery('<li/>', {
					html: jQuery('<a/>', {
						href: viewUrl,
						html: category.name
					})
				}).appendTo(categoryContainer);

				if(category.categories)
					drawCategories(category.categories, categoryComponent, viewUrl);
			})
	}

	function createViewUrl(fatherUrl, view) {
		return fatherUrl + view + '/'
	}

})
