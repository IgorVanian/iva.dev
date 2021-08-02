import * as React from 'react'
import Comment from '../components/comment';
import Layout from '../components/layout'

const Tools = [{
  title: 'HTML/CSS',
  stars: 7,
  nextLevel: 'Préprocesseur, animations CSS3 complexes...',
  comment: "On commence à se connaître depuis un paquet d'années avec le p'tiot. Je dois admettre qu'il se débrouille mais s'il arrêtait de toujours se reposer sur le JS pour ses animations, il aurait peut-être pas de cheveux blancs à 27 ans!",
  dateAgo: 'il y a un 15 ans',
  image: 'html'
}, {
  title: 'JavaScript (ES6)',
  stars: 9,
  nextLevel: "On n'a jamais vraiment fini d'apprendre le JavaScript",
  comment: "Je lui mets 9/10, Igor a toujours su se montrer patient quand ça n'allait pas pour moi. Il est toujours à l'écoute et s'intéresse beaucoup à ce que je fais. Peut-être qu'il lui manque un poil de rigueur mais on peut pas non plus tout avoir <3",
  dateAgo: 'il y a 8 ans',
  image: 'js'
}, {
  title: 'TypeScript',
  stars: 5,
  nextLevel: "L'utiliser instinctivement dans tous les projets",
  comment: "J'ai rencontré Igor à une soirée un peu bizarre, il m'a parru assez ouvert d'esprit, j'ai aimé échanger quelque mots avec lui. J'espère qu'on se recroisera au plus vite!!!",
  dateAgo: 'il y a 1 an',
  image: 'ts'
}, {
  title: 'NodeJS',
  stars: 7,
  nextLevel: "Observables, RxJS",
  comment: "7/10 c'est bien payé. Le mec débarque quand ça lui chante, n'en fait qu'à sa tête soit disant qu'il 'n'a pas le temps' et rebelotte pour la prochaine! La programmation réactive Igor, c'est pour 2050?!?",
  dateAgo: 'il y a 5 ans',
  image: 'nodejs'
}, {
  title: 'React',
  stars: 7,
  nextLevel: "Maitriser les hooks",
  comment: "Chic type, toujours partant pour déconner, pas spécialement rapide à la détente mais efficace! Baisse pas les bras!",
  dateAgo: 'il y a 3 ans',
  image: 'react'
}, {
  title: 'React-Native',
  stars: 7,
  nextLevel: "Moins se prendre la tête sur les upgrades",
  comment: "Se dit être un pote alors qu'il a toujours mon ancien numéro! Puis niveau ménage, vous auriez vu son appart. Bon, il avait tellement de bordel à ranger, sous pression il a trié n'importe comment. Prends ton temps, on t'a dit plein de fois!!",
  dateAgo: 'il y a 5 ans',
  image: 'reactNative'
}, {
  title: 'SQL/NoSQL',
  stars: 5,
  nextLevel: null,
  comment: "Avec tous ses nouveaux amis ça fait un bail que je l'ai pas revu. Mais je suis sûr qu'il se rappelle de moi. On a une bonne mémoire nous deux! Repasse quand tu veux!",
  dateAgo: 'il y a 9 ans',
  image: 'mongodb'
}, {
  title: 'GraphQL',
  stars: 3,
  nextLevel: "Commencer à l'utiliser régulièrement dans un projet",
  comment: "A dit qu'il m'aiderait à trouver un job. J'attends toujours son appel...à bon entendeur...",
  dateAgo: 'il y a 3 ans',
  image: 'graphql'
}, {
  title: 'GitLab',
  stars: 5,
  nextLevel: null,
  comment: "On le voit souvent trainer dans le coin, il fait ses affaires discrètement puis s'en va. Mais on se marre bien des fois. La gueule qu'il tire quand il voit un tuyau bouché depuis des jours xD",
  dateAgo: 'il y a 5 ans',
  image: 'gitlab'
}, {
  title: 'AWS',
  stars: 4,
  nextLevel: null,
  comment: "Un client, sans plus. Pas d'embrouilles en règle générale, pas trop consommateur. Tant qu'il respecte l'établissement, pas de soucis pour moi.",
  dateAgo: 'il y a 4 ans',
  image: 'aws'
}, {
  title: 'Unix',
  stars: 3,
  nextLevel: null,
  comment: "ce qu'on s'est envoyé dans la gueule une fois poto xdddddddd putain ça ressemblait à rien vasy fais gaffe a toi biz",
  dateAgo: 'il y a 10 ans',
  image: 'unix'
}, {
  title: 'Java',
  stars: 3,
  nextLevel: null,
  comment: "Il se rappelle plus de moi c'est sûr...ou alors il fait exprès...bref, le malaise",
  dateAgo: 'il y a 10 ans',
  image: 'java'
}, {
  title: 'PHP',
  stars: 1,
  nextLevel: null,
  comment: "Un jour il m'a annoncé qu'il éprouvait un dégout profond envers moi, comme ça, gratos, sans raison...",
  dateAgo: 'il y a 10 ans',
  image: 'php'
}, {
  title: 'Python',
  stars: 2,
  nextLevel: null,
  comment: "Je le stalk depuis des années sans oser m'approcher. Je sais où il habite et des fois je l'observe par sa fenêtre. Un jour j'aurais le courage d'aller lui parler :(",
  dateAgo: 'il y a 5 ans',
  image: 'python'
}]

const ToolboxPage = () => {
  return (
    <Layout pageTitle="My toolbox">
      <div>
        {
          Tools.map(t => {
            return (
              <Comment title={t.title} comment={t.comment} stars={t.stars} dateAgo={t.dateAgo} image={t.image} />
            )
          })
        }        
      </div>
    </Layout>
  )
}

export default ToolboxPage


/*

HTML/CSS
JavaScript (ES6)
TypeScript
NodeJS (REST API, WebSockets...)
GraphQL
Serverless computing
React (CRA, Gatsby, Netlify)
React-Native
Android & iOS
Gitlab / CircleCI
AWS
Atlas (MongoDB)
SQL
Google
Unix & bash

*/