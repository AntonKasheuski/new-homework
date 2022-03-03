import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "../../HW7.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options
        ? options.map((o, i) => <option key={i}>{o}</option>)
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <select className={s.SuperSelectClass}
                onChange={onChangeCallback}
                value={value}
                {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
