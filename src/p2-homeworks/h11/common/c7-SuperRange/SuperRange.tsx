import React from 'react'
import s from './SuperRange.module.css'
import {Slider} from "@mui/material";

type SuperRangePropsType = {
    value: number
    onChangeRange?: (value: number) => void
    min: number
    max: number
    step: number
    disabled: boolean
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        value, onChangeRange, min, max, step, disabled
    }
) => {
    const onChangeCallback = (e: Event, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as number)
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
            />
        </div>
    )
}

export default SuperRange
