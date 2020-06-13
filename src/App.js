import React from 'react';
import Nums from './Nums';
import Display from './Display';
import Zero from './Zero';
import Orange from './Orange';





function App() {
    return ( 
        <div classNameName = "App" >

        <Display/>
      <span  style={{flex:1, display:'flex', flexDirection:'row',flexWrap: 'wrap',maxwidth:'80vw',marginLeft:'10vw'}}>
        
        <Nums numb='AC'/ >
        <Nums numb='+/-'/ >
        <Nums numb='%'/ >
        <Orange orange='/'/ >
       

        <Nums numb='7'/ >
        <Nums numb='8'/ >
        <Nums numb='9'/ >
        <Orange orange='X'/ >
     

        <Nums numb='4'/ >
        <Nums numb='5'/ >
        <Nums numb='6'/ >
        <Orange orange='-'/ >
       

        <Nums numb='1'/ >
        <Nums numb='2'/ >
        <Nums numb='3'/ >
        <Orange orange='+'/ >



        <Zero / >
        <Nums numb='.'/ >
        <Orange orange='='/ >

      </span>   
        </div>

       );
        /*</div>*/
         /*);*/
}

export default App;