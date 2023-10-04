
import styles from '../styles/message.module.scss'
export function message(msg: string, duration: number) {

    const transTime = 300
    const msgContainer = document.createElement('div')

    const mask = document.createElement('div')
    mask.classList.add(styles.mask)

    msgContainer.append(mask)


    const content = document.createElement('div')
    content.classList.add(styles.msg)
    content.innerHTML = msg


    msgContainer.appendChild(content)


    // into view 
    document.body.appendChild(msgContainer)
    //state1
    content.classList.add(styles['content-state1'])
    mask.classList.add(styles['mask-state1'])

    msgContainer.clientHeight// force render 

    //state2

    content.classList.add(styles['content-state2'])
    mask.classList.add(styles['mask-state2'])

    //state3
    setTimeout(() => {
        content.classList.remove(styles['content-state2'])
        content.classList.add(styles['content-state3'])

        //state4
        setTimeout(() => {
            mask.classList.remove(styles['mask-state2'])
            mask.classList.add(styles['mask-state3'])
        }, transTime)

    }, duration + transTime)

    //remove from view
    setTimeout(() => {
        msgContainer.remove()
    }, duration + transTime * 3)
}