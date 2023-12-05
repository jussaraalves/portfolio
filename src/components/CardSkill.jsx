import PropTypes from 'prop-types';
import styles from '../scss/components/cardskill.module.scss';

export default function CardSkill({name, icon}){
  return(
    <div className={styles.container}>
      <div className="icon">{icon}</div>
      <div>{name}</div>
    </div>
    
  )
}

CardSkill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};