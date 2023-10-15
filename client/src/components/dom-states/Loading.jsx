import React from 'react'
import './Loading.scss'
import '@picocss/pico';

const Loading = () => {
  return (
    <section
      className="loading-container"
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >

      <picture
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '40px',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30dvh'
        }}
      >
        <img 
          src="/logo.png" 
          alt=""
          style={{
            objectFit: 'contain',
            position:  'absolute',
            width: '250px',
            height: '250px',
            marginInline: 'auto',
            marginBlock: 'auto'
          }}
          loading='eager'
        />
      </picture>
      <progress
        style={{
          width: '300px',
          marginTop: '15px',
          height: '20px',
          borderRadius: '50px'
        }}
      />
    </section>
  )
}

export default Loading;
