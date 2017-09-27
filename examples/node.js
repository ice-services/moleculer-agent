"use strict";

const { ServiceBroker } = require("moleculer");
const { Agent } 		= require("../");

// Create broker
const broker = new ServiceBroker({
	nodeID: process.argv[2] || "node-" + process.pid,
	transporter: "NATS",
	logger: console
});

broker.createService(Agent);

broker.start();
