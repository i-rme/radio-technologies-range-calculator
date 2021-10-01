function uCalculateCost231Hata(enviroment) {

	console.log("   uCalculateCost231Hata("+ enviroment +") called.");

	systemBand = value("systemBand");
	baseStationHeight = value("baseStationHeight");
	mobileHeight = value("mobileHeight");

	Lb = value("ruLinkMargin");
	F = 46.3+33.9*log10(systemBand)-13.82*log10(baseStationHeight);
	B = 44.9 - 6.55 * log10(baseStationHeight);

	switch (enviroment) {
	  case 'bigCity':
	    C = 3.2 * pow(log10(11.75 * mobileHeight), 2) - 4.97;
		G = 3;
	    break;
	  case 'mediumSmallCity':
		C = (1.1 * log10(systemBand)-0.7) * mobileHeight - 1.56 * log10(systemBand) + 0.8;
		G = 0;
	    break;
	  case 'suburban':
		C =  2 * pow(log10(systemBand/28), 2) + 5.4;
		G = 0;
	    break;
	  case 'rural':
		C = 4.78 * pow(log10(systemBand), 2) - 18.33 * log10(systemBand) + 40.94 ;
		G = 0;
	    break;
	  default:
	    console.error('ERROR, invalid enviroment: ' + enviroment);
	}

	distance = pow(10, (Lb - F + C - G ) / B);

	console.log("   Lb: " + Lb + " F: " + F + " C: " + C + " G: " + G + " B: " + B + " distance: " + distance);
	console.log("   uCalculateCost231Hata("+ enviroment +") executed. [" + distance + "]");
	return distance;
}

function uCalculateCOST231HATABigCity() {
	distance = uCalculateCost231Hata("bigCity");
	change("ruCoverageRangeBigCity", distance);
}

function uCalculateCOST231HATAMediumCity() {
	distance = uCalculateCost231Hata("mediumSmallCity");
	change("ruCoverageRangeMediumSmallCity", distance);
}

function uCalculateCOST231HATASuburban() {
	distance = uCalculateCost231Hata("suburban");
	change("ruCoverageRangeSuburbanCity", distance);
}

function uCalculateCOST231HATARural() {
	distance = uCalculateCost231Hata("rural");
	change("ruCoverageRangeRural", distance);
}



function uCalculateOkumuraHata(enviroment) {

	console.log("   uCalculateOkumuraHata("+ enviroment +") called.");

	systemBand = value("systemBand");
	baseStationHeight = value("baseStationHeight");
	mobileHeight = value("mobileHeight");

	Lb = value("ruLinkMargin");
	A = 69.55 + 26.16 * log10(systemBand) - 13.82 * log10(baseStationHeight);
	B = 44.9 - 6.55 * log10(baseStationHeight);

	switch (enviroment) {
	  case 'bigCity':
	    C = 3.2 * pow(log10(11.75 * mobileHeight), 2) - 4.97;
	    break;
	  case 'mediumSmallCity':
		C = (1.1 * log10(systemBand)-0.7) * mobileHeight - 1.56 * log10(systemBand) + 0.8;
		G = 0;
	    break;
	  case 'suburban':
		C =  2 * pow(log10(systemBand/28), 2) + 5.4;
	    break;
	  case 'rural':
		C = 4.78 * pow(log10(systemBand), 2) - 18.33 * log10(systemBand) + 40.94;
	    break;
	  default:
	    console.error('ERROR, invalid enviroment: ' + enviroment);
	}

	distance = pow(10, (Lb - A + C) / B);

	console.log("   Lb: " + Lb + " A: " + A + " C: " + C + " B: " + B + " distance: " + distance);
	console.log("   uCalculateOkumuraHata("+ enviroment +") executed. [" + distance + "]");
	return distance;
}

function uCalculateOkumuraHataBigCity() {
	distance = uCalculateOkumuraHata("bigCity");
	change("ruCoverageRangeBigCity", distance);
}

function uCalculateOkumuraHataMediumCity() {
	distance = uCalculateOkumuraHata("mediumSmallCity");
	change("ruCoverageRangeMediumSmallCity", distance);
}

function uCalculateOkumuraHataSuburban() {
	distance = uCalculateOkumuraHata("suburban");
	change("ruCoverageRangeSuburbanCity", distance);
}

function uCalculateOkumuraHataRural() {
	distance = uCalculateOkumuraHata("rural");
	change("ruCoverageRangeRural", distance);
}

function uCalculateDistance() {

	systemBand = value("systemBand");

	if(systemBand > 1500){
		uCalculateCOST231HATABigCity();
		uCalculateCOST231HATAMediumCity();
		uCalculateCOST231HATASuburban();
		uCalculateCOST231HATARural();
	}else{
		uCalculateOkumuraHataBigCity();
		uCalculateOkumuraHataMediumCity();
		uCalculateOkumuraHataSuburban();
		uCalculateOkumuraHataRural();
	}

}

// Main function
function uCalculate() {
	console.log("uCalculate() called.");

	uCalculateEIRP();
	uCalculateReceiverNoiseLevel();
	uCalculateSubchannelizationGain();
	uCalculateReceiverSensitivity();
	uCalculateSystemGain();
	uCalculateShadowfadeMargin();
	uCalculateBuildingPenetrationLoss();
	uCalculateLinkMargin();

	uCalculateDistance();

	console.log("uCalculate() executed.");

}
