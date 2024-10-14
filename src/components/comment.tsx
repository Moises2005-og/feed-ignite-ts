import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./comment.module.css"
import { useState } from "react"

type commentData = {
    content: string,
    onDeleteComment: any
}

export function Comment({content, onDeleteComment}: commentData) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    const [likeCount, setLike] = useState(0)

    function handleLikeComment() {
        setLike((state) => {
            return state +  1
        })
    }
    return(
        <div className= {styles.comment}>
            <img src="https:\\github.com/Moises2005-og.png" />
            <div className= {styles.commentBox}>
                <div className= {styles.commentContent}>
                    <header>
                        <div className= {styles.authorAndTime}>
                            <strong>Moisés Sebastião</strong>
                            <time title="6 de Outubro de 2024" dateTime="2024-10-06 16:27:30">Publicado há uma hora</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>   
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>    
                    </button>
                </footer>
            </div>
        </div>
    )
}