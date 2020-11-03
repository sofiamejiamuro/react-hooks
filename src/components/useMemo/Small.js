// Con la propiedad memo podemos memorizar el componente y que solo se rederice si hay un campio en las properties del mismo
// Hay dos formas de hacerlo
// import React, { memo } from 'react';

/* 
const Small = memo(({ value }) => {

  console.log('me volvi a llamar')
  return (
    <small>{value}</small>
  )
}) */
import React from 'react';

const Small = React.memo(({ value }) => {

  console.log('me volvi a llamar')
  return (
    <small>{value}</small>
  )
})

export default Small;
