function dCalculateCost231Hata(enviroment) {

	console.log("   dCalculateCost231Hata("+ enviroment +") called.");

	systemBand = value("systemBand");
	baseStationHeight = value("baseStationHeight");
	mobileHeight = value("mobileHeight");

	Lb = value("rdLinkMargin");
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
	console.log("   dCalculateCost231Hata("+ enviroment +") executed. [" + distance + "]");
	return distance;
}

function dCalculateCOST231HATABigCity() {
	distance = dCalculateCost231Hata("bigCity");
	change("rdCoverageRangeBigCity", distance);
}

function dCalculateCOST231HATAMediumCity() {
	distance = dCalculateCost231Hata("mediumSmallCity");
	change("rdCoverageRangeMediumSmallCity", distance);
}

function dCalculateCOST231HATASuburban() {
	distance = dCalculateCost231Hata("suburban");
	change("rdCoverageRangeSuburbanCity", distance);
}

function dCalculateCOST231HATARural() {
	distance = dCalculateCost231Hata("rural");
	change("rdCoverageRangeRural", distance);
}



function dCalculateOkumuraHata(enviroment) {

	console.log("   dCalculateOkumuraHata("+ enviroment +") called.");

	systemBand = value("systemBand");
	baseStationHeight = value("baseStationHeight");
	mobileHeight = value("mobileHeight");

	Lb = value("rdLinkMargin");
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
	console.log("   dCalculateOkumuraHata("+ enviroment +") executed. [" + distance + "]");
	return distance;
}

function dCalculateOkumuraHataBigCity() {
	distance = dCalculateOkumuraHata("bigCity");
	change("rdCoverageRangeBigCity", distance);
}

function dCalculateOkumuraHataMediumCity() {
	distance = dCalculateOkumuraHata("mediumSmallCity");
	change("rdCoverageRangeMediumSmallCity", distance);
}

function dCalculateOkumuraHataSuburban() {
	distance = dCalculateOkumuraHata("suburban");
	change("rdCoverageRangeSuburbanCity", distance);
}

function dCalculateOkumuraHataRural() {
	distance = dCalculateOkumuraHata("rural");
	change("rdCoverageRangeRural", distance);
}

function dCalculateDistance() {

	systemBand = value("systemBand");

	if(systemBand > 1500){
		dCalculateCOST231HATABigCity();
		dCalculateCOST231HATAMediumCity();
		dCalculateCOST231HATASuburban();
		dCalculateCOST231HATARural();
	}else{
		dCalculateOkumuraHataBigCity();
		dCalculateOkumuraHataMediumCity();
		dCalculateOkumuraHataSuburban();
		dCalculateOkumuraHataRural();
	}

}

// Main function
function dCalculate() {
	console.log("calculate() called.");

	dCalculateEIRP();
	dCalculateReceiverNoiseLevel();
	dCalculateSubchannelizationGain();
	dCalculateReceiverSensitivity();
	dCalculateSystemGain();
	dCalculateShadowfadeMargin();
	dCalculateBuildingPenetrationLoss();
	dCalculateLinkMargin();

	dCalculateDistance();

	console.log("calculate() executed.");

}
