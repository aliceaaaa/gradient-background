import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withStyles, } from 'src/withStyles;
import styles from 'src/HeadStyles';

const Header = ({ className: propClassName, classes, variant, ...other }) => {

  const className = classNames(
    classes.root,
    {
      [classes[variant]]: variant,
    },
    propClassName
  );

  return (
  <div className={ className } { ...other }>
    <h1>Change background color!</h1>
    <h4>Please, enter your colors:</h4>
  </div>
 
    };
    
export default Header;
