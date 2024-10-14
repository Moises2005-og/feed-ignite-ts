import { Avatar } from "./avatar"
import styles from "./sidebar.module.css"
import {PencilLine} from "phosphor-react"

export function Sidebar() {
    return(
        <aside className= {styles.sidebar}>
            <img 
            className= {styles.cover}
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className= {styles.profile}>
                <Avatar hasBorder = { true } src="https://github.com/Moises2005-og.png" />

                <strong>Moisés Sebastião</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size="20"/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}