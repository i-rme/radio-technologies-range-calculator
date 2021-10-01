// Hides Javascript Warning
document.getElementById("jsTitle").innerHTML = "Advanced Communication Systems - Radio Technologies";

// Alert deprecated browsers
if (window.document.documentMode) {
  alert("Internet Explorer is not supported, please use Google Chrome, Mozilla Firefox, Microsoft Edge or Safari.");
}

// Helper functions
function change(id, newValue) {
	console.log("      change("+id+", "+newValue+") result: [" + document.getElementById(id).value + " -> " + newValue + "]");
	document.getElementById(id).value = newValue;
}

function value(id) {
	elementValue = document.getElementById(id).value;
	console.log("      value("+id+") result: [" + elementValue + "]");
	return parseFloat(elementValue);
}

function log10(number){
	return Math.log10(number);
}

function pow(base, exponent){
	return Math.pow(base, exponent);
}

function onload() {
	populateWimaxValues();
	console.log("# Perform a calculation and the logs will appear below #");
}

function calculate() {
	dCalculate();
	uCalculate();
	aggregateCalculation();
	return false;	// Required to avoid form submission and page refresh
}

function aggregateCalculation() {

	document.getElementById("detailsAggregate").open=true;

	if(value("rdCoverageRangeBigCity") < value("ruCoverageRangeBigCity")){

		document.getElementById("summaryAggregate").innerHTML = "Aggregate results (downlink is weaker)";

		change("rEffectiveIsotropicRadiatedPower", value("rdEffectiveIsotropicRadiatedPower"));
		change("rReceiverNoiseLevel", value("rdReceiverNoiseLevel"));
		change("rSubchannelizationGain", value("rdSubchannelizationGain"));
		change("rReceiverSensitivity", value("rdReceiverSensitivity"));
		change("rSystemGain", value("rdSystemGain"));
		change("rShadowfadeMargin", value("rdShadowfadeMargin"));
		change("rBuildingPenetrationLoss", value("rdBuildingPenetrationLoss"));
		change("rLinkMargin", value("rdLinkMargin"));

		change("rCoverageRangeBigCity", value("rdCoverageRangeBigCity"));
		change("rCoverageRangeMediumSmallCity", value("rdCoverageRangeMediumSmallCity"));
		change("rCoverageRangeSuburbanCity", value("rdCoverageRangeSuburbanCity"));
		change("rCoverageRangeRural", value("rdCoverageRangeRural"));

	}else{

		document.getElementById("summaryAggregate").innerHTML = "Aggregate results (uplink is weaker)";

		change("rEffectiveIsotropicRadiatedPower", value("ruEffectiveIsotropicRadiatedPower"));
		change("rReceiverNoiseLevel", value("ruReceiverNoiseLevel"));
		change("rSubchannelizationGain", value("ruSubchannelizationGain"));
		change("rReceiverSensitivity", value("ruReceiverSensitivity"));
		change("rSystemGain", value("ruSystemGain"));
		change("rShadowfadeMargin", value("ruShadowfadeMargin"));
		change("rBuildingPenetrationLoss", value("ruBuildingPenetrationLoss"));
		change("rLinkMargin", value("ruLinkMargin"));

		change("rCoverageRangeBigCity", value("ruCoverageRangeBigCity"));
		change("rCoverageRangeMediumSmallCity", value("ruCoverageRangeMediumSmallCity"));
		change("rCoverageRangeSuburbanCity", value("ruCoverageRangeSuburbanCity"));
		change("rCoverageRangeRural", value("ruCoverageRangeRural"));

	}
}


