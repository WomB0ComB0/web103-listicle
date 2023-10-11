import React from 'react'
import { Logo, Switcher } from './Nav'
import './DashboardNavbar.scss'
const DashboardNavbar = () => {
  return (
    <nav className='container-fluid'>
      <Logo />
      <menu>
        <Switcher />
        <li>
          <button></button>
        </li>
      </menu>
    </nav>
  )
}

export default DashboardNavbar
