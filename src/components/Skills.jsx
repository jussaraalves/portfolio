import { FaReact, FaHtml5, FaCss3Alt, FaSass  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FcAndroidOs } from "react-icons/fc";
import { SiTypescript,SiStyledcomponents, SiTailwindcss,SiNextdotjs,SiInsomnia } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import styles from '../scss/components/skills.module.scss';
import CardSkill from "./CardSkill";

export default function Skills(){
  return( 
    <section className={`animate__animated animate__slideInLeft ${styles.containerMain}`} style={{ animationDuration: '1.5s' }}>
      <div>
        <h2 className={styles.gradienteText}>&lt;Skills/&gt;</h2>
      </div>
      <div className={styles.container} >
        <CardSkill name="ReactJS/Native" icon={<FaReact color="#61DAFB" size={50} />} />
        <CardSkill name="HTML5" icon={<FaHtml5 color="#E44D26" size={50} />} />
        <CardSkill name="CSS3" icon={<FaCss3Alt color="#264DE4" size={50} />} />
        <CardSkill name="TypeScript" icon={<SiTypescript color="#007ACC" size={50} />} />
        <CardSkill name="JavaScript" icon={<IoLogoJavascript color="#F7DF1E" size={50} />} />
        <CardSkill name="NextJS" icon={<SiNextdotjs color="#000000" size={50} />} />
        <CardSkill name="Sass" icon={<FaSass color="#CC6699" size={50} />} />
        <CardSkill name="Styled-components" icon={<SiStyledcomponents color="#DB7093" size={50} />} />
        <CardSkill name="TailwindCSS" icon={<SiTailwindcss color="#38B2AC" size={50} />} />
        <CardSkill name="Insomnia" icon={<SiInsomnia color="#5849BE" size={50} />} />
        <CardSkill name="Android Studio" icon={<FcAndroidOs color="#3DDC84" size={50} />} />
        <CardSkill name="Git" icon={<FaGitAlt color="#F05032" size={50} />} />
      </div>
    </section>
  )
}