import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error.length > 0) ? s.inputError : s.inputCorrect// need to fix with (?:)

    return (
        <div className={s.addNameClass}>
            {/*<input value={name} onChange={setNameCallback} onKeyPress={onKeyHandler} className={inputClass}/>
            <span className={s.error}>{error}</span>*/}
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyHandler}
                error={error}
            />
            {/*<button onClick={addUser} className={s.add}>add</button>*/}
            <SuperButton onClick={addUser} className={s.add}> add</SuperButton>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
