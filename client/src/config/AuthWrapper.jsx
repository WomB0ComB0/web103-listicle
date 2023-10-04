import React,  { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../client';
import PropTypes from 'prop-types'
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
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
          theme='default'
          providers={['google', 'github']}
        />
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
