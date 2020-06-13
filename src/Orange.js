import React from 'react';

function Orange(props){
	return(
		<div>
			<div style={{width:'20vw', height: '10vh', background:'orange', fontSize:'20px', textAlign: 'center',paddingTop:'10px', border:'0.2px solid grey'}}> <h2>{props.orange}</h2> </div>
		</div>
		);
}

export default Orange;