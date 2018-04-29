import setHeader from '../configs/header-api'
export default function( router ){
	//Set default route to error respon
	router.use('/', setHeader , (req,res ) => {
		res.status(500).json({
			'errors':[
				{ message:'Not Allowed' }
			]
		});
	})
}
