import { ChangeEvent, FormEvent, useState }   from "react"
import { Avatar   }   from "./avatar"
import { Comment  }   from "./comment"
import   styles       from "./post.module.css"

type publiData = {
    author: {
        name: string,
        avatar_url: string,
        role: string
    }, 
    publishedAt: Date, 
    content: {type: string, content: string}[],
}



export function Post( {author, publishedAt, content}: publiData ) {
    const publishedAtDate = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit"
    }).format(publishedAt)

    const [newCommentText, setNewCommentText] = useState<string>('')

    function handlecreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    const [comments, setComment] = useState<any[]>([]) 

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault()
        setComment([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório")
    }

    function deleteComment(commentToDelete: FormEvent) {
        const deleteWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComment(deleteWithoutDeletedOne)
    }

    return (
        <article className= {styles.post}>
            <header>
                <div className= {styles.autor}>
                    <div className={styles.authorInfo}>
                        <Avatar hasBorder= { true } src = {author.avatar_url}/>
                        <div>
                        <strong>{author.name}</strong>
                        <span>{author.role} </span>
                        </div>
                    </div>
                    <time title = {publishedAtDate} dateTime="2024-10-06 16:27:30">Publicado há uma hora</time>
                </div>
            </header>
            <div className={styles.content}>
                {content?.map((line: any) => {
                    if(line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    }
                    return <p key={line.content}><a href="#" className= {styles.link}>{line.content}</a></p>
                })}
            </div>
            <form onSubmit= {handleCreateNewComment} className= {styles.commentform}>
                <strong>Deixe seu feedback</strong>
                    <textarea value= {newCommentText} onChange= {handlecreateNewCommentChange} placeholder="Deixe um comentario" required onInvalid={handleNewCommentInvalid}/>
                    <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>
                <div className= {styles.commentList}>
                    {comments.map(comment => {
                        return (
                        <
                            Comment key={comment} content= {comment} onDeleteComment = {deleteComment}
                        />)
                    })
                    }   
                </div>
        </article>
    )
}