import styles from '../scss/components/home.module.scss';
import { TypeAnimation } from 'react-type-animation';
import pc from '../assets/pc.png';
import 'animate.css'
export default function Home(){
  
  return(
    <section>
      <div style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInLeft ${styles.introduction}`}>
        <p className={styles.gradienteText}>HI THERE! I'M</p>
        <h1>
          <TypeAnimation
            sequence={[
              'Jussara Alves',
              1000, 
              'Web Developer',
              1000,
              'Mobile Developer',
              1000,
              
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>

        <p className={` ${styles.text}`}>A <strong>Frontend Web Developer and Mobile</strong> with a curious mind who enjoys solving a complex and challenging problem, 
        constantly looking for new knowledge.
        </p>
        <a className={styles.btn} href="/about">More About Me</a>
      </div>
      <div style={{ animationDuration: '1.5s' }} className='animate__animated animate__slideInRight'>
        <img className={styles.imageHome} src={pc} alt="image of computer" />
      </div>
    </section>
  )
}