import React from 'react'
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils'
import './Details.scss'

export default function Details({className, children, style}) {
  return (
    <details className={cn('', className)} style={style}>
      {children}
    </details>
  )
}
Details.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}