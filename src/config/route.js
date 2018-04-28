import express from 'express';

const setHeader = function( req , res , next){
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

export default function ( app ) {

	app.get('/system', setHeader ,(req,res ) => {
		res.json({
			success:true,
			data:{
				background:'/assets/tes.jpg',
				home: process.myconfig.host+':'+process.myconfig.port
			},
		});
	}) 
	// SET route to assets ( public folder ) for static access
	app.use('/assets',express.static('public'))

	//Set default route to error respon
	app.use('/', setHeader , (req,res ) => {
		res.status(500).json({
			'errors':[
				{ message:'Not Allowed' }
			]
		});
	})
	
}; 