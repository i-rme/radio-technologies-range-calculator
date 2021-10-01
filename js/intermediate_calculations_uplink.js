
function uCalculateEIRP() {
	console.log("   uCalculateEIRP() called.");

	uTransmitterOutput = value("uTransmitterOutput");
	uTransmitterAntennas = value("uTransmitterAntennas");
	uTransmitterAntennaGain = value("uTransmitterAntennaGain");
	uTransmitterLoss = value("uTransmitterLoss");
	eirp = uTransmitterOutput + 10 * log10(uTransmitterAntennas) +  uTransmitterAntennaGain - uTransmitterLoss;
	change("ruEffectiveIsotropicRadiatedPower", eirp);

	console.log("   uCalculateEIRP() executed. [" + eirp + "]");
}

function uCalculateReceiverNoiseLevel() {
	console.log("   uCalculateReceiverNoiseLevel() called.");

	channelBandwidth = value("channelBandwidth");
	channelBandwidthMultiplier = value("channelBandwidthMultiplier");
	
	receiverNoiseLevel = -174 + 10 * log10(channelBandwidth * channelBandwidthMultiplier);
	change("ruReceiverNoiseLevel", receiverNoiseLevel);

	console.log("   uCalculateReceiverNoiseLevel() executed. [" + receiverNoiseLevel + "]");
}

function uCalculateSubchannelizationGain() {
	console.log("   uCalculateSubchannelizationGain() called.");

	subchannels = value("uSubchannels");
	subchannelizationGain = 10 * log10(subchannels);
	change("ruSubchannelizationGain", subchannelizationGain);

	console.log("   uCalculateSubchannelizationGain() executed. [" + subchannelizationGain + "]");
}

function uCalculateReceiverSensitivity() {
	console.log("   uCalculateReceiverSensitivity() called.");

	receiverNoiseLevel = value("ruReceiverNoiseLevel");
	receiverNoiseFigure = value("uReceiverNoiseFigure");
	requiredSNR = value("uRequiredSNR");
	macroDiversityGain = value("macroDiversityGain");
	subchannelizationGain = value("ruSubchannelizationGain");
	dataRate = value("dataRate");
	receiverSensitivity = 10 * log10(dataRate) + receiverNoiseLevel + receiverNoiseFigure + requiredSNR - macroDiversityGain - subchannelizationGain;
	change("ruReceiverSensitivity", receiverSensitivity);

	console.log("   uCalculateReceiverSensitivity() executed. [" + receiverSensitivity + "]");
}

function uCalculateSystemGain() {
	console.log("   uCalculateSystemGain() called.");

	effectiveIsotropicRadiatedPower = value("ruEffectiveIsotropicRadiatedPower");
	receiverSensitivity = value("ruReceiverSensitivity");
	receiverAntennaGain = value("uReceiverAntennaGain");
	receiverLoss = value("uReceiverLoss");
	systemGain = effectiveIsotropicRadiatedPower - receiverSensitivity + receiverAntennaGain - receiverLoss;
	change("ruSystemGain", systemGain);

	console.log("   uCalculateSystemGain() executed. [" + systemGain + "]");
}

function uCalculateShadowfadeMargin() {
	console.log("   uCalculateShadowfadeMargin() called.");

	marginShadowfade = value("marginShadowfade");
	change("ruShadowfadeMargin", marginShadowfade);

	console.log("   uCalculateShadowfadeMargin() executed. [" + marginShadowfade + "]");
}

function uCalculateBuildingPenetrationLoss() {
	console.log("   uCalculateBuildingPenetrationLoss() called.");

	buildingPenetrationLoss = value("buildingPenetrationLoss");
	change("ruBuildingPenetrationLoss", buildingPenetrationLoss);

	console.log("   uCalculateBuildingPenetrationLoss() executed. [" + buildingPenetrationLoss + "]");
}

function uCalculateLinkMargin() {
	console.log("   uCalculateLinkMargin() called.");

	systemGain = value("ruSystemGain");
	shadowfadeMargin = value("marginShadowfade");
	marginInterference = value("marginInterference");

	buildingPenetrationLoss = value("ruBuildingPenetrationLoss");
	bodyPersonLoss = value("bodyPersonLoss");

	linkMargin = systemGain - shadowfadeMargin - marginInterference - buildingPenetrationLoss - bodyPersonLoss;
	change("ruLinkMargin", linkMargin);

	console.log("   uCalculateLinkMargin() executed. [" + linkMargin + "]");
}