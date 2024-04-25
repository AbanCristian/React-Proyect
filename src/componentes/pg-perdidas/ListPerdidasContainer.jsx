import React, { useEffect, useState } from 'react'
import { getVivero } from '../../peticiones/Vivero/getVivero'
import ListPerdidas from './ListPerdidas';

const ListPerdidasContainer = () => {
    
    const [perdidas, setPerdidas] = useState([]);

    useEffect(() => {
        getVivero().then((res) => {
            setPerdidas(res.detallePerdidas);
        })
    }, [])


  return (
    <div>
      
    <ListPerdidas perdidas ={perdidas}/>
    </div>
  )
}

export default ListPerdidasContainer
