
export default function ( app ) {
	app.get('/hello',(req,res)=>{
		res.send( 'Hello wrold ');
	}) 

	app.use('/',(req,res)=>{
		res.status(500).json({
			'errors':[
				{message:'Not Allowed'}
			]
		});
	})
}; 