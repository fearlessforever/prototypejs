import express from 'express'

export default function ( app ) {
	let routeMiddleware ={
		default: express.Router(),
		getconfig: express.Router(),
	};

	require('../routers/default').default( routeMiddleware.default )
	require('../routers/getconfig').default( routeMiddleware.getconfig )

	// SET route to assets ( public folder ) for static access
	app.use('/assets' , express.static('public') )
	
	app.use('/get-config' , routeMiddleware.getconfig )
	app.use('/*' , routeMiddleware.default ) 
	
}; 