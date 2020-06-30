import React from 'react'
import styled from 'styled-components'

const Certifications = ({ certifications = [], title = 'Certifications' }) => {
  return (
    <div style={{ paddingTop: '30px' }}>
      <h1>{title}</h1>
      {certifications.map((cert, index) => (
        <div key={index}>
          <span>&gt; </span>
          <StyledLink href={cert.url} target="_blank" rel="noreferrer">
            <span>{cert.name}</span>
          </StyledLink>
          <br />
        </div>
      ))}
    </div>
  )
}

const StyledLink = styled.a`
  color: #555555;
`

export default Certifications
