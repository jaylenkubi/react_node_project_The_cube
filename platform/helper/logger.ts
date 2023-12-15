import winston from "winston";

export const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: {service: 'user-service'},
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple(),
	}));
}

export const logRequest = (message: string, data?: any) => {
	logger.info(message);
	data ? logger.info(JSON.stringify(data)) : null;
}