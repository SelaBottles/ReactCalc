import React from 'react';


function Nums(props){
	return(
		<div>
			<div style={{width:'20vw', height: '10vh', background:'lightgrey', fontSize:'20px', textAlign: 'center',paddingTop:'10px',border:'0.2px solid grey'}} > <h2>{props.numb}</h2> </div>
		</div>
		);
}

export default Nums;