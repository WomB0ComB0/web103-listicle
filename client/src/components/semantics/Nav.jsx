import React, { useState, useEffect } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { supabase } from '../../client';
import { Avatar } from '@ark-ui/react'
import '@picocss/pico';
import './Nav.scss'
import { useNavigate } from 'react-router-dom'
import { Popover } from '@headlessui/react'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
      } else {
        setUserProfile(data.session.user.user_metadata);
      }
    };
    fetchProfile();
  }, []);
  // console.log(typeof(userProfile))
  return (
    <>
      <Popover
        style={{
          position: 'relative',
          paddingRight: `1.5rem`,
          zIndex: '10'
        }}
      >
        <Popover.Button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            height: '50px',
            width: '50px',
            borderRadius: `100%`,
          }}
        >
          <Avatar.Root
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              height: '50px',
            }}
          >
            <Avatar.Fallback
              dangerouslySetInnerHTML={
                {
                  __html: userProfile.name ? userProfile.name[0] : '&nbsp;🧑',
                }
              }
            />
            <Avatar.Image
              src={!!userProfile.avatar_url ? userProfile.avatar_url : '/NoImage.jpg' } alt={`${userProfile.name}`}
              width={50} height={50}
              style={{
                borderRadius: `50%`,
                width: `50px`,
                height: `50px`,
                objectFit: `cover`,
                objectPosition: `center`,
                cursor: `pointer`,
              }}
            />
          </Avatar.Root>
        </Popover.Button>
        <Popover.Panel
          style={{
            position: 'absolute',
            zIndex: 10,
            marginTop: '1rem',
            backgroundColor: 'inherit',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridColumn: 2,
              gap: '0.5rem',
            }}
          >
            <button
              onClick={() => {
                supabase.auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

const Nav = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const { theme, setTheme } = useTheme();
  const navigate =  useNavigate();
  return (
    <>
      <nav className="container-fluid">
        <Logo />
        <menu>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="primary">Theme</summary>
              <ul role="listbox">
                <li>
                  <button onClick={() => setTheme("auto")}>
                    Auto
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme("light")}>
                    Light
                  </button>
                </li>
                <li>
                  <button onClick={() => setTheme("dark")}>
                    Dark
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link" className="primary">
                Sort By Rating
              </summary>
              <ul>
                <li>
                  {/* props.sortByRating('asc') */}
                  <button onClick={() => { }}>
                    Ascending
                  </button>
                </li>
                <li>
                  {/* props.sortByRating('desc') */}
                  <button onClick={() => { }}>
                    Descending
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details role='list' dir='rtl'>
              <summary aria-haspopup="listbox" role="link" className="primary">
                Sort by Year
              </summary>
              <ul>
                <li>
                  {/* props.sortByYear('asc') */}
                  <button onClick={() => { }}>
                    Ascending
                  </button>
                </li>
                <li>
                  {/* props.sortByYear('desc') */}
                  <button onClick={() => { }}>
                    Descending
                  </button>
                </li>
              </ul>
            </details>
          </li>

        </menu>
        {/* Authentication Logic */}
        {!session && window.location.pathname == '/new' ? null : (

          <menu
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            gap: `0.5rem`,
          }}
          >
          {window.location.pathname == '/new' ? (

            <li>
              <button
                onClick={() => {
                  navigate(`/`);
                }}
                style={{
                  padding: `0.25rem`,
                }}
              >
                Home
              </button>
            </li>
          ) :  
          (<li>
            <button
              onClick={() => {
                navigate(`/new`);
              }}
              style={{
                padding: `0.25rem`,
              }}
            >
              Add Movie
            </button>
          </li>)
          }
          {
            session ? (
              <>
                <li>
                  <Profile />
                </li>
              </>
            ) : null
          }
        </menu>
      )}
      </nav>
    </>
  );
};

export const Logo = () => {
  return (
    <>
      <menu>
        <li>
          <a
            href={'/'}
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              textDecoration: `none`,
              gap: `0.5rem`,
            }}
          >
            <img src={`/logo.png`} alt="logo" width={100} height={100}
              style={{
                borderRadius: `50%`,
                width: `50px`,
                height: `50px`,
                objectFit: `cover`,
                objectPosition: `center`,
                cursor: `pointer`,
              }} />
            <strong
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                textDecoration: `none`,
                fontSize: `1.2rem`,
              }}
            >
              Topins Toop
            </strong>
          </a>
        </li>
      </menu>
    </>
  )
}

export const Switcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link" className="primary">Theme</summary>
          <ul role="listbox">
            <li>
              <button onClick={() => setTheme("auto")}>
                Auto
              </button>
            </li>
            <li>
              <button onClick={() => setTheme("light")}>
                Light
              </button>
            </li>
            <li>
              <button onClick={() => setTheme("dark")}>
                Dark
              </button>
            </li>
          </ul>
        </details>
      </li>
    </>
  )
}

export default Nav;