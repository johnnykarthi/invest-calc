import React, { useState } from 'react'

export default function SubNav() {

  const [sip,setsip] = useState('active');
//   const [lump,setLump] = useState('');


  const changeSip = ()=>{

    setsip('active');
    //setLump('');

  }

//   const changeLump = ()=>{
//         setLump('active');
//         setsip('')
//   }



  return (
    <div className="switch-button-box">
        <button className={`switch-button ${sip}`} onClick={changeSip}>SIP</button>
        {/* <button class={`switch-button ${lump}`}onClick={changeLump}>Lumpsum</button> */}
    </div>
  )
}
