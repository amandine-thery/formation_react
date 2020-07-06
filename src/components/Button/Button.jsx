import React from 'react'; //ReactNode n'est pas importer par défaut
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

/**
 * Commentaire du Button
 * 
 * @param {*} props 
 */
const Button = (props) => {
  console.log(props);

  /**
   * 
   * @param {*} event 
   */
  const onclick=(event)=>{
    const target = event.currentTarget;
    target.classList.add(styles.onclick);
    setTimeout(()=> {
      target.classList.remove(styles.onclick);
    }, 500);

    props.onClick(event);
  }
  return (
  <div className={styles.Button} data-testid="Button" onClick={onclick} style={{border:`1px solid $(props.bgColor)`}}>
    <div className={styles.container} style={{backgroundColor:props.bgColor}}>
      {props.children}
    </div>
  </div>
)};

Button.propTypes={

  onClick: PropTypes.func, //facultative
  bgColor: PropTypes.string.isRequired,
}

Button.defaultProps={
  bgColor:'tomato',
  onClick:(evt)=>{},
}

export default Button;
