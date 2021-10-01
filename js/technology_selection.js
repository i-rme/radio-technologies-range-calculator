
// Form functions
function changeTechnology(){
	var wimax = document.getElementById("radioWimax").checked;
	var gsm = document.getElementById("radioGSM").checked;
	var umts = document.getElementById("radioUMTS").checked;

	if (wimax) {
		populateWimaxValues();

		allowMultipleSubchannels();
		allowMultipleAntennas();
		blockBodyPersonLoss();
		blockMarginInterference();
		setChannelBandwidthUnitsToMHz();
		blockDataRate();
	}
	if (gsm) {
		populateGsmValues();

		blockMultipleSubchannels();
		blockMultipleAntennas();
		allowBodyPersonLoss();
		blockMarginInterference();
		setChannelBandwidthUnitsToKHz();
		blockDataRate();
	}
	if (umts) {
		populateUmtsValues();

		blockMultipleSubchannels();
		blockMultipleAntennas();
		allowBodyPersonLoss();
		allowMarginInterference();
		setChannelBandwidthUnitsToNone();
		allowDataRate();
	}
}

function allowMultipleSubchannels(){
	// Enable subchannels number change
	document.getElementById("dSubchannels").disabled = false;
	document.getElementById("uSubchannels").disabled = false;
}

function blockMultipleSubchannels(){
	//Disable subchannels number change
	change("dSubchannels", "1");
	change("uSubchannels", "1");
	document.getElementById("dSubchannels").disabled = true;
	document.getElementById("uSubchannels").disabled = true;
}

function allowMultipleAntennas(){
	// Enable antenna number change
	document.getElementById("dTransmitterAntennas").disabled = false;
	document.getElementById("uTransmitterAntennas").disabled = false;
}

function blockMultipleAntennas(){
	//Disable antenna number change
	change("dTransmitterAntennas", "1");
	change("uTransmitterAntennas", "1");
	document.getElementById("dTransmitterAntennas").disabled = true;
	document.getElementById("uTransmitterAntennas").disabled = true;
}

function allowBodyPersonLoss(){
	// Enable bodyPersonLoss
	document.getElementById("bodyPersonLoss").disabled = false;
}

function blockBodyPersonLoss(){
	// Disable bodyPersonLoss
	change("bodyPersonLoss", "0");
	document.getElementById("bodyPersonLoss").disabled = true;
}

function allowMarginInterference(){
	// Enable marginInterference
	document.getElementById("marginInterference").disabled = false;
}

function blockMarginInterference(){
	// Disable marginInterference
	change("marginInterference", "0");
	document.getElementById("marginInterference").disabled = true;
}

function setChannelBandwidthUnitsToMHz(){
	// Change labelChannelBandwidth units
	document.getElementById('labelChannelBandwidth').innerHTML = "MHz";
	change("channelBandwidthMultiplier", pow(10, 6));
	document.getElementById("channelBandwidth").disabled = false;
}

function setChannelBandwidthUnitsToKHz(){
	// Change labelChannelBandwidth units
	document.getElementById('labelChannelBandwidth').innerHTML = "KHz";
	change("channelBandwidthMultiplier", pow(10, 3));
	document.getElementById("channelBandwidth").disabled = false;
}

function setChannelBandwidthUnitsToNone(){
	// Change labelChannelBandwidth units
	document.getElementById('labelChannelBandwidth').innerHTML = "";
	change("channelBandwidthMultiplier", 1);
	change("channelBandwidth", 1);
	document.getElementById("channelBandwidth").disabled = true;
}

function allowDataRate(){
	//Enable data rate
	change("dataRate", "250");
	document.getElementById("dataRate").disabled = false;
}

function blockDataRate(){
	//Disable data rate
	change("dataRate", "1");
	document.getElementById("dataRate").disabled = true;
}


function populateWimaxValues(){
	//General
	change("marginShadowfade", "10");
	change("marginInterference", "0");
	change("channelBandwidth", "10");
	change("channelBandwidthMultiplier", "1000000");
	change("buildingPenetrationLoss", "0");
	change("systemBand", "2300");
	change("macroDiversityGain", "0");
	change("baseStationHeight", "50");
	change("mobileHeight", "1.5");
	change("bodyPersonLoss", "0");
	change("dataRate", "1");

	//Downlink
	change("dTransmitterOutput", "40");
	change("dTransmitterAntennas", "2");
	change("dTransmitterAntennaGain", "0");
	change("dTransmitterLoss", "1");
	change("dReceiverLoss", "4");
	change("dReceiverAntennaGain", "0");
	change("dSubchannels", "16");
	change("dRequiredSNR", "1.2");
	change("dReceiverNoiseFigure", "8");

	//Uplink
	change("uTransmitterOutput", "20");
	change("uTransmitterAntennas", "1");
	change("uTransmitterAntennaGain", "0");
	change("uTransmitterLoss", "4");
	change("uReceiverLoss", "1");
	change("uReceiverAntennaGain", "18");
	change("uSubchannels", "16");
	change("uRequiredSNR", "2");
	change("uReceiverNoiseFigure", "4");

}

function populateGsmValues(){
	//General
	change("marginShadowfade", "10");
	change("marginInterference", "0");
	change("channelBandwidth", "200");
	change("channelBandwidthMultiplier", "1000");
	change("buildingPenetrationLoss", "3");
	change("systemBand", "900");
	change("macroDiversityGain", "3");
	change("baseStationHeight", "50");
	change("mobileHeight", "1.5");
	change("bodyPersonLoss", "3");
	change("dataRate", "1");

	//Downlink
	change("dTransmitterOutput", "40");
	change("dTransmitterAntennas", "1");
	change("dTransmitterAntennaGain", "12");
	change("dTransmitterLoss", "3");
	change("dReceiverLoss", "1");
	change("dReceiverAntennaGain", "0");
	change("dSubchannels", "1");
	change("dRequiredSNR", "1.2");
	change("dReceiverNoiseFigure", "9");

	//Uplink
	change("uTransmitterOutput", "30");
	change("uTransmitterAntennas", "1");
	change("uTransmitterAntennaGain", "0");
	change("uTransmitterLoss", "1");
	change("uReceiverLoss", "3");
	change("uReceiverAntennaGain", "15");
	change("uSubchannels", "1");
	change("uRequiredSNR", "1.8");
	change("uReceiverNoiseFigure", "4");

}

function populateUmtsValues(){
	//General
	change("marginShadowfade", "12");
	change("marginInterference", "6");
	change("channelBandwidth", "1");
	change("channelBandwidthMultiplier", "1");
	change("buildingPenetrationLoss", "3");
	change("systemBand", "2000");
	change("macroDiversityGain", "3");
	change("baseStationHeight", "50");
	change("mobileHeight", "1.5");
	change("bodyPersonLoss", "3");
	change("dataRate", "250");

	//Downlink
	change("dTransmitterOutput", "20");
	change("dTransmitterAntennas", "1");
	change("dTransmitterAntennaGain", "15");
	change("dTransmitterLoss", "1");
	change("dReceiverLoss", "3");
	change("dReceiverAntennaGain", "0");
	change("dSubchannels", "1");
	change("dRequiredSNR", "0.8");
	change("dReceiverNoiseFigure", "9");

	//Uplink
	change("uTransmitterOutput", "20");
	change("uTransmitterAntennas", "1");
	change("uTransmitterAntennaGain", "0");
	change("uTransmitterLoss", "3");
	change("uReceiverLoss", "1");
	change("uReceiverAntennaGain", "15");
	change("uSubchannels", "1");
	change("uRequiredSNR", "1.8");
	change("uReceiverNoiseFigure", "4");

}