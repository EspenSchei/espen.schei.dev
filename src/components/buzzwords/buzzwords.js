import React from 'react'

const Buzzwords = ({ buzzwords = [], title = 'Buzzwords' }) => {
  const formattedBuzzwords = buzzwords
    .map(buzz => (buzz.startsWith('*') ? `<b>${buzz.substring(1)}</b>` : buzz))
    .join(', ')

  return (
    <div style={{ paddingTop: '30px' }}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: formattedBuzzwords }}></p>
    </div>
  )
}

export default Buzzwords
