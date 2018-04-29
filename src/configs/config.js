// set my config to clobal nodejs variabel process
process.myconfig ={
	root: __dirname , host : 'freelence.hel' , port: 8000
};
switch( process.argv[2] ){
	case 'production':
	case 'development':
		process.myconfig.env = process.argv[2] ;
		break;
	default:
		console.error( "\x1b[31m", 'Your environment ['+ process.argv[2] +'] is not known by the system \n' );
		process.exit(1);
		break;
}
export default function(){

};
