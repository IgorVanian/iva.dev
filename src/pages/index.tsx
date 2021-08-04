// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import PresentationBox from '../components/presentationBox'
import { Images } from '../images'
import * as HomeStyles from './home.module.css'

const Projects = [{
  title: 'Ancien CV de 2014',
  description: "Site inspiré des menus de Final Fantasy fait avec Angular 1 et Tweenmax.",
  link: 'https://igorvanian.com'
}, {
  title: 'CPYPST',
  description: 'Copy and paste stuff online. Petit projet perso qui me rend toujours service!',
  link: 'https://cpypst.io'
}]

const IndexPage = () => {
  return (
    <Layout pageTitle="👋 Salut!">
      <div className={HomeStyles.main}>
        <PresentationBox title="Je m'appelle Igor" linkTitle="Mes aventures de développeur" link="/work">
          <div>
            <p>et je suis ce qu'on appelle un développeur 💻</p>
            <div style={{height: '100px', display: 'flex', margin: '20px 0'}}>
              <img style={{height: '100%', borderRadius: '100%'}} src={Images['igor']} alt="Moi à Budapest, en cure anti-polémique React vs Angular" />
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 10px'}}>
                <span style={{textAlign: 'center', fontStyle: 'italic', fontSize: '0.8em'}}>Moi à Budapest, en cure anti-polémique React vs Angular</span>
              </div>
            </div>
            <p>Depuis 2014, je suis développeur à plein temps. Après avoir terminé mes études, je me suis lancé tête baissée dans la vie active avec une volonté de résoudre tous les problèmes du monde. Bon...C'était pas gagné...</p>
          </div>
        </PresentationBox>

        <PresentationBox title="Dans ma valise il y a..." linkTitle="Ma boîte à outils" link="/toolbox">
          <div>
            <div style={{display: 'flex', margin: '50px 0', justifyContent: 'space-evenly', height: '80px'}}>
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['react']} alt="React" />
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['nodejs']} alt="NodeJS" />
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['js']} alt="JavaScript" />
            </div>
            <p>
              Actuellement spécialisé dans le développement des applications avec des technologies comme React(-Native) et NodeJS, je me suis armé ces dernières années d'une boîte à outils pour m'attaquer à de nombreux challenges. <br />
              Mais des fois, les outils éprouvés ne sont pas suffisants pour répondre à un défi. Alors j'explore le web à la recherche de quoi compléter mon arsenal. En 2021, c'est très dur. Un moment d'inattention et on se retrouve en pleine guerre de religions...
            </p>
            <p>
              En plus de l'avalanche technologique que sont les multiples frameworks, librairies, langages et autres outils, ces dernières années de nombreux concepts se sont installés dans mon esprit : Clean Code, Agilité, XP... Tout un tas de super-pouvoirs 
              que j'espère maîtriser dans un futur proche.
            </p>
          </div>
        </PresentationBox>
        
        <PresentationBox title="Des fois je lis..." linkTitle="Ma bibliothèque" link="/books">
          <div>
            <div style={{display: 'flex', margin: '50px 0', justifyContent: 'space-evenly', height: '100px'}}>
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['thinkKrug']} alt="Don't make me think, book by Steve Krug" />
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['cleanCoder']} alt="Clean Coder, book by Robert C. Martin" />
              <img style={{width: '80px', objectFit: 'contain'}} src={Images['pragmaticProgrammer']} alt="Pragmatic Programmer, book by David Thomas and Andrew Hunt" />
            </div>
            <p>Très curieux, je cherche toujours à apprendre de nouvelles choses sur mon métier, que ce soit la technique, les bonnes pratiques ou tout simplement le quotidien d'un développeur moderne.</p>
            <p>
              Une étagère de bouquins sur des thèmes comme l'UX ou le game design m'aide à élargir mes connaissances sur les sujets qui me tiennent à cœur et applicables dans ma vie de développeur et pourquoi pas d'entrepreneur. <br />
              Par contre, j'avoue que je n'ai pas encore trouvé le courage de commencer "Code Complete".
            </p>
          </div>
        </PresentationBox>

        <PresentationBox title="Du clavier au clavier">
          <div style={{margin: '50px 0'}}>
            <div style={{textAlign: 'center'}}>
              <img style={{height: '100px', width: '100%', objectFit: 'cover'}} src={Images['repeatForever']} alt="Repeat forever note on sheet music" />
              <span style={{fontStyle: 'italic', fontSize: '0.8em', padding: '5px'}}>Parce que même en musique on peut avoir des boucles infinies...</span>
            </div>
            <p>
              La musique est quelque chose qui m'accompagne quasiment tous les jours. Je pratique la guitare et plus récemment du piano (c'est cool et ça fait de la déco de fond pour sessions Zoom). Je serai évidemment ravi de discuter musique avec toi!
            </p>
          </div>
        </PresentationBox>
        
        <PresentationBox title="Le meilleur sport du monde">
          <div style={{margin: '50px 0'}}>
            <div style={{textAlign: 'center'}}>
              <img style={{height: '140px', width: '100%', objectFit: 'cover', objectPosition: '50% 40%'}} src={Images['climbing']} alt="Repeat forever note on sheet music" />
              <span style={{fontStyle: 'italic', fontSize: '0.8em', padding: '5px'}}>Ça c'est pas moi...</span>
            </div>
            <p>
              Je cherche des partenaires de grimpe en Haute-Savoie ! Actuellement de niveau 5c-6a, mais une fois, j'ai fait une 6b en moulinette en ne me reposant que 20 fois!
            </p>
          </div>
        </PresentationBox>
        
        <PresentationBox title="Mon pouvoir nul">
          <div>
            <p>
              Généralement, j'ai une idée de projet quand je me lève le matin. Puis j'ai une autre idée le soir même. Souvent, je les oublie alors je les partage avec des gens pour que des fois, ils me les rappellent.<br />
              Il parait qu'il y a un truc qui s'appelle "Lean Startup". Je devrais peut-être regarder ça de plus près...
            </p>
          </div>
        </PresentationBox>


        <PresentationBox title="Anciens projets">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {Projects.map((p) => {
              return (
                <div style={{flex: 0.4, textAlign: 'center'}}>
                  <a href={p.link}>{p.title}</a>
                  <p>{p.description}</p>
                </div>
              )
            })}
          </div>
        </PresentationBox>
        
        <p>
          Ah oui, j'ai utilisé Gatsby pour créer ce site. Le code est sur Github. Une grosse surcouche pour un site statique mais ça fait le café...Peut-être qu'un jour ça deviendra un vrai blog 🤷‍♂️
        </p>

        <p style={{textAlign: 'center'}}>With ❤️ by Igor Vanian</p>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage