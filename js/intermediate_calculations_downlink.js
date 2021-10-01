
function dCalculateEIRP() {
	console.log("   dCalculateEIRP() called.");

	dTransmitterOutput = value("dTransmitterOutput");
	dTransmitterAntennas = value("dTransmitterAntennas");
	dTransmitterAntennaGain = value("dTransmitterAntennaGain");
	dTransmitterLoss = value("dTransmitterLoss");
	eirp = dTransmitterOutput + 10 * log10(dTransmitterAntennas) +  dTransmitterAntennaGain - dTransmitterLoss;
	change("rdEffectiveIsotropicRadiatedPower", eirp);

	console.log("   dCalculateEIRP() executed. [" + eirp + "]");
}

function dCalculateReceiverNoiseLevel() {
	console.log("   dCalculateReceiverNoiseLevel() called.");

	channelBandwidth = value("channelBandwidth");
	channelBandwidthMultiplier = value("channelBandwidthMultiplier");

	receiverNoiseLevel = -174 + 10 * log10(channelBandwidth * channelBandwidthMultiplier);
	change("rdReceiverNoiseLevel", receiverNoiseLevel);

	console.log("   dCalculateReceiverNoiseLevel() executed. [" + receiverNoiseLevel + "]");
}

function dCalculateSubchannelizationGain() {
	console.log("   dCalculateSubchannelizationGain() called.");

	subchannels = value("dSubchannels");
	subchannelizationGain = 10 * log10(subchannels);
	change("rdSubchannelizationGain", subchannelizationGain);

	console.log("   dCalculateSubchannelizationGain() executed. [" + subchannelizationGain + "]");
}

function dCalculateReceiverSensitivity() {
	console.log("   dCalculateReceiverSensitivity() called.");

	receiverNoiseLevel = value("rdReceiverNoiseLevel");
	receiverNoiseFigure = value("dReceiverNoiseFigure");
	requiredSNR = value("dRequiredSNR");
	macroDiversityGain = value("macroDiversityGain");
	subchannelizationGain = value("rdSubchannelizationGain");
	dataRate = value("dataRate");
	receiverSensitivity = 10 * log10(dataRate) + receiverNoiseLevel + receiverNoiseFigure + requiredSNR - macroDiversityGain - subchannelizationGain;
	change("rdReceiverSensitivity", receiverSensitivity);

	console.log("   dCalculateReceiverSensitivity() executed. [" + receiverSensitivity + "]");
}

function dCalculateSystemGain() {
	console.log("   dCalculateSystemGain() called.");

	effectiveIsotropicRadiatedPower = value("rdEffectiveIsotropicRadiatedPower");
	receiverSensitivity = value("rdReceiverSensitivity");
	receiverAntennaGain = value("dReceiverAntennaGain");
	receiverLoss = value("dReceiverLoss");
	systemGain = effectiveIsotropicRadiatedPower - receiverSensitivity + receiverAntennaGain - receiverLoss;
	change("rdSystemGain", systemGain);

	console.log("   dCalculateSystemGain() executed. [" + systemGain + "]");
}

function dCalculateShadowfadeMargin() {
	console.log("   dCalculateShadowfadeMargin() called.");

	marginShadowfade = value("marginShadowfade");
	change("rdShadowfadeMargin", marginShadowfade);

	console.log("   dCalculateShadowfadeMargin() executed. [" + marginShadowfade + "]");
}

function dCalculateBuildingPenetrationLoss() {
	console.log("   dCalculateBuildingPenetrationLoss() called.");

	buildingPenetrationLoss = value("buildingPenetrationLoss");
	change("rdBuildingPenetrationLoss", buildingPenetrationLoss);

	console.log("   dCalculateBuildingPenetrationLoss() executed. [" + buildingPenetrationLoss + "]");
}

function dCalculateLinkMargin() {
	console.log("   dCalculateLinkMargin() called.");

	systemGain = value("rdSystemGain");
	shadowfadeMargin = value("marginShadowfade");
	marginInterference = value("marginInterference");

	buildingPenetrationLoss = value("rdBuildingPenetrationLoss");
	bodyPersonLoss = value("bodyPersonLoss");

	linkMargin = systemGain - shadowfadeMargin - marginInterference - buildingPenetrationLoss - bodyPersonLoss;
	change("rdLinkMargin", linkMargin);

	console.log("   dCalculateLinkMargin() executed. [" + linkMargin + "]");
}