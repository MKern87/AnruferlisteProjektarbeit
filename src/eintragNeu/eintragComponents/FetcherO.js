  import React from "react";
  const FetcherO = async (prop)=>{
     if(prop!=""||prop!=null||prop!=undefined){
    const request = {
      method:'POST',
      headers: { 'Content-Type': 'aplication/json' },
      body:JSON.stringify({

      })
    };

    const x = await fetch ('http://localhost/Kundenliste/backend/baum.php', request);
    let y = await x.json();
    let c;

    if(y){
      
    for(let i=0; i< y.bData.length; i++){
      if(y.bData[i].ID==prop && (prop)){
        console.log(y.bData[i].Kategorie)
        c= await y.bData[i].Kategorie.toString();
        return c.trim();
      }
    }
    }
    
    }else{
      return "";
    }
    
  }

  export default FetcherO
