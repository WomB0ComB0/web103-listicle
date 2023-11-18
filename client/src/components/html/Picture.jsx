import React from 'react'
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils'
import './Picture.scss'

export default function Picture({className, children, style}) {
  return (
    <picture className={cn('', className)} style={style}>
      {children}
    </picture>
  )
}
Picture.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}