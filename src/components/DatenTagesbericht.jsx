import React, {useState, useEffect} from 'react'
import RowColor from './RowColor';

const DatenTagesbericht = ({searchd, werte, werterr, sDate, eDate, mA, stammdatenArt}) => {

  const [tdata, setTdata] = useState([]);

//////// Datenbankabfrage Tagesbericht //////// 

  const datentagesbericht = async({value, rrvalue, sdate, edate, mitArb, sdArt}) => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      })
    };

    const h = await fetch ('http://localhost/Kundenliste/backend/tagesbericht.php', request);
    let i = await h.json();
    console.log(i);

//////// Daten vorhanden ? ////////

    if (i.tdata.length>0) {
      let narr = i.tdata

//////// Filtern nach erledigt ////////

      if (value === 2) { 
      }else{
        narr = narr.filter((item) => item.Erledigt == value)
      }

//////// Filtern nach Rückruf ////////

      if (rrvalue === 2) {
      }else{
        narr = narr.filter((item) => item.Rueckruf == rrvalue)
      }

//////// Filtern nach StartDatum ////////

          if(sdate=='' || undefined){
          }else{
             narr = narr.filter(
             (item) => {return item.Datum.date >= sdate}
             )
         }

//////// Filtern nach EndDatum ////////

         if(edate=='' || undefined){
 
         }else{
         narr = narr.filter(
         (item) => {return item.Datum.date <= edate || item.Datum.date.includes(edate)}
         )
         }

//////// Filter nach Mitarbeitern ////////

         if (mitArb == ''){
         }else{
          narr = narr.filter(
          (item) => {return item.Mitarbeiter.toLowerCase().toString().includes(mitArb.toLowerCase().toString())}
          )
         }

//////// Filtern nach Art ////////

         if (sdArt == ''){
         }else{
          narr = narr.filter(
            (item) => {return item.Art_ID.toLowerCase().toString().includes(sdArt.toLowerCase().toString())}
          )
         }

//////// Arr an tData ////////

      setTdata(narr)
}
    console.log(i);
}


  useEffect(()=>{
    datentagesbericht({value: werte, rrvalue: werterr, sdate: sDate, edate: eDate, mitArb: mA, sdArt: stammdatenArt});
  }, [werte, werterr, sDate, eDate, mA, stammdatenArt])


//////// Filter Textsuche ////////  
  return (
    <>
    {tdata.length>0 ?
      <>
        {
          tdata.filter((item) => {
            return searchd.toLowerCase() === ''
            ? item
            : (
              item.text.toLowerCase().includes(searchd.toLowerCase()) 
              || item.Mitarbeiter.toLowerCase().includes(searchd.toLowerCase()) 
              || item.Art_ID.toLowerCase().includes(searchd.toLowerCase()) 
              || item.Kategorie_ID.toLowerCase().includes(searchd.toLowerCase())
              //|| item.Kunden_ID.toLowerCase().includes(searchd.toLowerCase())
              )
          }).map((item, index) =>(
            <RowColor key={item+index} ITEM={item} />
          ))
        }
       </>
        :
        <>
        Keine Daten!
        </>
    }
    </>
  )
}

export default DatenTagesbericht