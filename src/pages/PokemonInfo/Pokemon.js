import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Pokemon = () => {
    const location = useLocation();

    console.log(location, 'location');
    const name = useParams();
  return (
    <div>Pokemon</div>
  )
}

export default Pokemon