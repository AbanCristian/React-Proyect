import React, { useState } from 'react'

const Buscador = () => {
    const [inputValue, setInputValue] = useState('');
  return (
    <form action="">
        <input type="text"
        placeholder='buscar producto'
        value={inputValue}
        />
    </form>
  )
}

export default Buscador
