import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className={s.tail1}></div>
            <div className={s.tail2}></div>
            <div className={s.name}>{props.name}</div>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default Message
