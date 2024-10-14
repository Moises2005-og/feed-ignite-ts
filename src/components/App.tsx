import "./global.css"
import styles from "./app.module.css"
import { Header } from "./Header.tsx"
import { Post } from "./post.tsx"
import {Sidebar} from "./sidebar.tsx"

const post = [
  {
      id: 1,
      author: {
          avatar_url: "https:\\github.com/Moises2005-og.png",
          name: "Moisés Sebastião",
          role: "Web Developer",
          content: [
              { type: "paragraph", content: "Fala Pessoal 👋"},
              { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
              { type: "link", content: "👉 jane.design/doctorcare"},
              { type: "link", content:"#novoprojeto #nlw #rocketseat"}
          ],
          publishedAt: new Date("08/10/2024-10:33:34")
      }
  },
  {
      id: 2,
      author: {
          avatar_url: "https:\\github.com/diego3g.png",
          name: "Diego Fernandes",
          role: "CTO @Rocketseat",
          content: [
              { type: "paragraph", content: "Fala Pessoal 👋"},
              { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
              { type: "link", content: "👉 jane.design/doctorcare"},
              { type: "link", content: "#novoprojeto #nlw #rocketseat"}
          ],
          publishedAt: new Date("08/10/2024-10:33:34")
      }
  }
]

export function App() {
  return(
    <>
      <Header />
      <div className= {styles.wrapper}>
        <Sidebar/ >
        <main>
            {post.map(post => {
              return (<Post
                key = {post.id}
                author = {post.author}
                content = {post.author.content}
                publishedAt = { post.author.publishedAt}
              />)
            })}
        </main>
      </div>
    </>
  )
}