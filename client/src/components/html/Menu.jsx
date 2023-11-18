import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Menu.scss'

export default function Menu ({ className, children, style }) {
  return (
    <menu className={cn('', className)} style={style}>
      {children}
    </menu>
  )
}
Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}