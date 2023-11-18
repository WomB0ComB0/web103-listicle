import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Header.scss'

export default function Header({ className, children, style  }) {
  return (
    <header className={cn('', className)} style={style}>
      {children}
    </header>
  )
}
Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}