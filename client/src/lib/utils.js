import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';

export function cn(...input) {
  return twMerge(clsx(...input));
}

cn.propTypes = {
  input: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.any),
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.undefined,
    ])
  ),
};