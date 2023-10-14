import React, { useState, useEffect } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { supabase } from '../../client';
import { Avatar } from '@ark-ui/react'
import '@picocss/pico';
import './Nav.scss'
import { Popover } from '@headlessui/react'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setUserProfile(data.session.user.user_metadata);
      }
    };

    fetchProfile();
  }, []);
  return (
    <>
      <Popover
        style={{
          position: 'relative'
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
            borderRadius: `50%`,
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
            <Avatar.Fallback>
              PA
            </Avatar.Fallback>
            <Avatar.Image
              src={userProfile.avatar_url} alt={`${userProfile.name}`}
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
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
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
  return (
    <>
      <nav className="container-fluid">
        <menu>
          <li
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              gap: `0.5rem`,
            }}
          >
            <>
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
                  color: `var(--primary)`
                }}
              >
                Topins Toop
              </strong>
            </>
          </li>
        </menu>
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
        <menu
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            gap: `0.5rem`,
          }}
        >
          <li>
            <button
              onClick={() => {
                window.location.href = `/new`;
              }
              }
            >
              Add Movie
            </button>
          </li>
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
      </nav>
    </>
  );
};

export default Nav;