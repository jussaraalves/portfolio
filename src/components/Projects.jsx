import Card from "./Card"
import Rick from '../assets/rickandmorty.png';
import Pokedex from '../assets/pokedex.png';
import Github from '../assets/github.png';
import styles from '../scss/components/projects.module.scss';

export default function Projects(){
  const projetos = [
    {
      imageSrc: Rick,
      stack: 'ReactJS, JavaScript, Styled-components',
      githubRepo: 'https://github.com/jussaraalves/character-catalog',
      deployLink: 'https://character-catalog.vercel.app/',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio.',
      title: 'Catálogo de personagens da série Rick and morty',
    },
    {
      imageSrc: Pokedex,
      stack: 'HTML, CSS',
      githubRepo: 'https://github.com/jussaraalves/projeto-pokedex',
      deployLink: 'https://jussaraalves.github.io/projeto-pokedex/',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio.',
      title: 'Pokedex',
    },
    {
      imageSrc: Github,
      stack: 'ReactJS, JavaScript, API',
      githubRepo: 'https://github.com/jussaraalves/card-in-react',
      deployLink: 'https://rocketcard-alpha.vercel.app/',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odio.',
      title: 'Card GitHub',
    },
  ];

  return(
    <div  style={{ animationDuration: '1.5s' }} className={`animate__animated animate__slideInLeft ${styles.container}`}>
      <div>
        <h2 className={styles.gradienteText}>&lt;Projects/&gt;</h2>
      </div>
      <div className={styles.content}>
        {projetos.map((projeto, index) => (
          <Card key={index} {...projeto} />
        ))}
      </div>

    </div>
  )
}