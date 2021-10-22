import React, { FunctionComponent } from 'react';
import { FormControl, Input, InputLabel } from '@mui/material';
import { TextInputType } from '../../constants/input';

interface MyProps {
    type?: string;
    label: string;
    onChange: Function;
    className?: string,
}

const TextInput: FunctionComponent<MyProps> = (props) => {
    const {
        type,
        label,
        onChange,
        className,
    } = props

    return (
        <FormControl className={className} variant="standard" sx={{
            '& label.Mui-focused': {
                color: '#231F20'
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#231F20'
            }
        }}>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type ? type : TextInputType.Text}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
        </FormControl>
    );
}

export default TextInput;