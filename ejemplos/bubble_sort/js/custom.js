//This will be executed when de doc is generated.
$(document).ready(function () {

	var
		i, j, exampleArr, stepByStep, sortInProcess, state,
		stateDescriptions = new Map([
			[0, 'J Step'],
			[1, 'I Step'],
			[2, 'Compare'],
			[3, 'Finished']
		]),
		defaultArrLen = 10;

	/************
	 * Triggers *
	 ************/
	$('#generate-button').click(generateClick);
	$('#sort-button').click(sortClick);

	/*******************
	 * Initializations *
	 *******************/
	generate();
	setStepByStep(true);

	/*
	 * Whenever the sort/step button is executed, the sort function is called.
	 * This function executes de next step base on the state variable. If the
	 * stepByStep flag is in true it will only execute the next step, if it is
	 * in false it will execute all the needed steps to finish the sort.
	 */
	function sort() {

		if(!sortInProcess) {
			setSortInProcess(true);
			console.log("Sort initialized");
		}

		do {
			switch(state) {
				case 0:
					console.log("Executing sort J step");
					sortJStep();
					break;
				case 1:
					console.log("Executing sort I step");
					sortIStep();
					break;
				case 2:
					console.log("Executing sort compare step");
					sortCompareStep();
					break;
				case 3:
					console.log("Executing sort finished step");
					sortFinishedStep();
					break;
				default:
					state = 0;
					throw "Inconsistent state (" + state + "), aborting execuion.";
			}
		} while(!stepByStep);

	}

	/*********
	 * Steps *
	 *********/
	function sortJStep() {
		moveJ();
		setState(2);			
		stepExecuted();
	}

	function sortIStep() {
		moveI();
		setState(2);
		stepExecuted();
	}

	function sortCompareStep() {
		if(exampleArr[j] > exampleArr[j + 1]) {
			sortSwitch();
		}

		if(j < exampleArr.length - i - 1)
			setState(0);
		else if(i < exampleArr.length - 1)
			setState(1);
		else
			setState(3);

		stepExecuted();
	}

	function sortFinishedStep() {
		setSortInProcess(false);
		disable('#sort-button');
		stepExecuted();
	}

	function generateClick() {
		generate();
	}

	function sortClick() {
		if(!isDisabled('#sort-button')) {
			sort();
		}
	}


	function generate(arrLen) {
		var len = arrLen ? arrLen : defaultArrLen;
		restartSort();

		for(var t=0; t<len; t++) {
			exampleArr.push(Math.round(Math.random()*100))
		}
		console.log("Generated: " + exampleArr);

		redrawArray();
	}

	function restartSort() {
		exampleArr = [];
		setSortInProcess(false);
		setI(1);
		setJ(0);
		setState(2);
		eneable('#sort-button');
	}


	

	function moveJ() {
		setJ(j+1);
		
	}

	function moveI() {
		setI(i+1);
		setJ(0);
	}

	function sortSwitch() {
		var tmp = exampleArr[j];
		exampleArr[j] = exampleArr[j + 1];
		exampleArr[j + 1] = tmp;
		redrawArray();
	}

	function stepExecuted() {
		redrawArray()
	}

	function eneable(id) {
		$(id).removeClass('disabled');
	}

	function disable(id) {
		$(id).addClass('disabled');
	}

	function isDisabled(id) {
		return $(id).hasClass('disabled');
	}

	/****************
	 * Array drawing *
	 ****************/
	function redrawArray() {

		$('#arr').html("");

		for(var t = 0; t < exampleArr.length; t ++) {
			var elementContainer = jQuery('<div/>', {
				class: "element-container",
				html: (jQuery('<div/>', {
					class: "element",
					html: (jQuery('<span/>', {
						html: exampleArr[t]
					}))
				}))
			}).appendTo('#arr');

			if(t == j)
				drawArrow(elementContainer, "J")
			else if(t == j + 1)
				drawArrow(elementContainer, "J + 1")
		}
	}

	function redrawGenerateButton() {
		$('#generate-button').html(sortInProcess || state == 3 ? 'Reset' : 'Generate');
	}

	function drawArrow(parent, title) {
		var arrowContainer = jQuery('<div/>', {
			class: "arrow-container"
		}).appendTo(parent);

		var arrow = jQuery('<div/>', {
			class: "arrow"
		}).appendTo(arrowContainer)

		jQuery('<span/>', {
			class: "arrow-title",
			html: title
		}).appendTo(arrowContainer)
	}


	/**********
	 * Seters *
	 **********/
	function setSortInProcess(value) {
		sortInProcess = value;
		redrawGenerateButton();
	}

	function setStepByStep(value) {
		stepByStep = value;
		$('#sort-button').html(stepByStep ? 'Step' : 'Sort');	
	}

	function setI(value) {
		i = value;
		$('#icounter').html('I = ' + i);
	}

	function setJ(value) {
		j = value;
		$('#jcounter').html('J = ' + j);
	}

	function setState(value) {
		state = value;
		$('.state .state-description').html(stateDescriptions.get(state));
		redrawGenerateButton();
	}
})