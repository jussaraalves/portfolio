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
          <p className={styles.text}>
            Hello! I'm glad to know you're interested in contacting me. 
            Whether to discuss collaboration opportunities, answer questions or simply 
            exchange ideas, I'm here to listen.
          </p>
          <img className={styles.gifContact} src="https://camo.githubusercontent.com/9e1afa221c966ab30fa0aed1fe8f2b4330cc626326d957a88f456930bc7df956/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313132383833393331353431303133373233382f313138313731393238343234323731383736312f6a75636f2d68656c6c6f2d6d6f72652e6769663f65783d36353832313464382669733d363536663966643826686d3d3066666331306230633235393161353236386534643234376361353062343639393737333732393233663836633262323463386666623062643265386433376326" alt="GIF" />
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