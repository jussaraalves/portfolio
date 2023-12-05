import styles from '../scss/components/contact.module.scss';
import {
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
export default function Contact(){
  return(
    <section>
        <div  style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInLeft ${styles.infoContact}`}>
          <h2 className={styles.gradienteText}>&lt;Contact/&gt;</h2>
          <p>
            Hello! I'm glad to know you're interested in contacting me. 
            Whether to discuss collaboration opportunities, answer questions or simply 
            exchange ideas, I'm here to listen.
          </p>
          <a href="https://github.com/jussaraalves" target='_blank'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/jussaraalvesdev/" target='_blank'><AiFillLinkedin /></a>
        </div>

        <form action="" style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInRight`}>
          <input type="text" placeholder="Your Name *"  required/>
          <input type="text" placeholder="Your Email *"  required/>
        
          <input className={styles.subject} type="text" placeholder="Subject *" required/>
          <textarea placeholder="Your Message *" required>
          </textarea>
          <input className={styles.bnt} type="submit" value="Send Message"/>
        </form>
      
    </section>
  )
}