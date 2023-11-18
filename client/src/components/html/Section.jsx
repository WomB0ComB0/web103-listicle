import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Section.scss'
export default function Section({ className, children, style }) {
  return (
    <section className={cn('', className)} style={style}>
      {children}
    </section>
  )
}
Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}