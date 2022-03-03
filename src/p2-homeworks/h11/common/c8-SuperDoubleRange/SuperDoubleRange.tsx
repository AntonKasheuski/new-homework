import React from 'react'
import {Slider} from "@mui/material";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    value?: [number, number]
    onChangeRange?: (value: [number, number]) => void
    min: number
    max: number
    step: number
    disabled: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, onChangeRange, min, max, step, disabled
    }
) => {

    const onChangeCallback = (e: Event, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <div className={s.slider}>
            <Slider
                value={value}
                onChange={onChangeCallback}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                disableSwap
            />
        </div>
    )
}

export default SuperDoubleRange
