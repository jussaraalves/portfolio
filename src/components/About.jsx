import styles from '../scss/components/about.module.scss';

export default function About(){
  return(
    <section className={styles}>
      <div style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInLeft ${styles.personalInfo}`}>
        <h1 className={styles.gradienteText}>&lt;About me/&gt;</h1>
        <p>
          <span>Hello!</span> I'm Jussara, an enthusiast passionate about transforming lines of code into incredible digital experiences! Currently, 
          I am immersed in the universe of <strong>Systems Analysis and Development</strong>, exploring the challenges and wonders of the area.
        </p>
      </div>
      <div className={styles.gif}>
        <img src="https://i.pinimg.com/originals/38/83/8d/38838d2369fe10f9e3f03e92bde4883c.gif" alt="GIF"/>
      </div>
      <div style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInRight ${styles.personalInfo}`}>  
        <p>
          🌸8 months ago, I started an exciting journey as an <strong>application development</strong> intern, where I delve into the nuances of <strong>front-end and mobile</strong>. 
          This experience has been an incredible opportunity to apply my knowledge in practice and contribute to building impactful solutions.
        </p>
        <p>
        🌸I am always looking for constant learning and new challenges. <strong>Let's join forces to create something extraordinary!</strong>
        </p>
      </div>
    </section>
  )
}