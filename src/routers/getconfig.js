import setHeader from '../configs/header-api'
export default function( router ){
	router.get('/system', setHeader ,(req,res ) => {
		res.json({
			success:true,
			data:{
				background:'/assets/tes.jpg',
				home: process.myconfig.host+':'+process.myconfig.port
			},
		});
	}) 
}