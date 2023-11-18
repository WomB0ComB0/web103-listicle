import React from 'react'
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils'
import './Article.scss'

export default function Article({className, children, style}) {
  return (
    <article className={cn('', className)} style={style}>
      {children}
    </article>
  )
}
Article.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}