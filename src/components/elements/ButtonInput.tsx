import React, { FunctionComponent } from 'react';
import { Button } from '@mui/material';

interface MyProps {
    label: string;
    onClick: Function;
    className?: string,
}

const ButtonImport: FunctionComponent<MyProps> = (props) => {
    const {
        label,
        onClick,
        className,
    } = props

    return (
        <Button className={className} variant="contained" sx={{
            borderRadius: '0',
            backgroundColor: '#231F20',
            height: '45px',
            '&:hover': {
                color: 'white',
                backgroundColor: 'rgba(35,31,32,0.85)'
            }
        }} onClick={() => {
            onClick()
        }}>{label}</Button>
    )
}

export default ButtonImport;