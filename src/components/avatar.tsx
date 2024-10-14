import styles from "./avatar.module.css"

type avatar = {
    hasBorder: boolean,
    src: string
}

export function Avatar({hasBorder = true, src}: avatar) {
    return (
        <img 
        className= {hasBorder ? styles.avatarWithBorder: styles.avatarWithoutBorder}
        src={src}
        />
    )
}