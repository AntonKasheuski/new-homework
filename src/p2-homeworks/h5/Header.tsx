import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import s from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export function Header() {
    const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false)

    const onClickHandler = () => {
        setHeaderCollapsed(!headerCollapsed)
    }

    return (
        <div className={headerCollapsed ? s.headerHideStyle : s.headerShowStyle}>
            <span>
                <NavLink to='/pre-junior' className={navData => navData.isActive ? s.activeLink : s.item}>Pre-junior</NavLink>
            </span><a> --- </a>
            <span>
                <NavLink to='/junior' className={navData => navData.isActive ? s.activeLink : s.item}>Junior</NavLink>
            </span><a> --- </a>
            <span>
                <NavLink to='/junior+' className={navData => navData.isActive ? s.activeLink : s.item}>Junior+</NavLink>
            </span><a> </a>
            <SuperButton onClick={onClickHandler}>=</SuperButton>
        </div>
    )
}