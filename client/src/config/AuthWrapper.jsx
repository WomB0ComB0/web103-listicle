import React,  { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../client';
import PropTypes from 'prop-types';
import './AuthWrapper.scss';
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
        <section style={{
          height: '80dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
      )
    }
    else {
      return ({children})
    }
}
AuthWrapper.protoTypes = {
  children: PropTypes.node.isRequired,
}
export default AuthWrapper
