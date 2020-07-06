import React from 'react';
import styles from './Button.module.scss';

const Button: React.FC = () => (
  <div className={styles.Button} data-testid="Button">
    Benjamin
  </div>
);

export default Button;
