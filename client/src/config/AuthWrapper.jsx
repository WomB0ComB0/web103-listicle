import React,  { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../client';
import PropTypes from 'prop-types';
import './AuthWrapper.scss';
import Footer from '../components/semantics/Footer';
const AuthWrapper = ({children}) => {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (
        <>
          
        <section 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100dvh',
            marginBottom: '0',
            gap: '1rem',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            marginTop: '-3rem'
          }}
          className='container-fluid'
        >
          <article
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              padding: '0',
              margin: '0',
            }}
          >
            <picture
              style={{
                borderRadius: `50%`,
                width: `200px`,
                height: `200px`,
                objectFit: `contain`,
                objectPosition: `center`,
                cursor: `pointer`,
              }}
            >
              <source srcSet='/logo.png' media=''/>
              <img
                src="/logo.png" 
                alt="Topins Toop"
                style={{
                  borderRadius: `50%`,
                  // width: `100px`,
                  // height: `100px`,
                  objectFit: `cover`,
                  objectPosition: `center`,
                  cursor: `pointer`,
                }}
              />
            </picture>
            <h1
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                textDecoration: `none`,
                fontSize: `3.4rem`,
                marginBottom: `20px`,
              }}
            >
              Topins Toop
            </h1>
          </article>
          <Auth 
            supabaseClient={supabase} 
            appearance={{ 
              theme: ThemeSupa,
              extend: true,
              className: {
                container: 'auth-top-container',
                button: 'auth-button',
                message: 'auth-message',
                input: 'auth-input',
                divider: 'auth-divider',
                anchor: 'auth-anchor',
              } 
            }} 
            providers={['google', 'github', 'discord']}
          />
        </section>
        </>
      )
    }
    else {
      return (
        children
      )
    }
}
AuthWrapper.protoTypes = {
  children: PropTypes.node.isRequired,
}
export default AuthWrapper
