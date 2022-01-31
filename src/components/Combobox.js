import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.options ? props.options : top100Films}
            sx={{ width: 300 }}
            onChange={props.onChange}
            size={props.size}
            style={props.style}
            renderInput={(params) => <TextField {...params} label={props.label ? props.label : "Choose Category"} />}
        />
    );
}
const top100Films = [
    { label: 'General Questions' },
    { label: 'Admission Faculty' },
    { label: 'Software Engineering' },
    { label: 'Mechanical Engineering' },
    { label: 'Electrical Engineering' },
    { label: 'BCIT' },
    { label: 'CIS Engineering' },
    { label: 'Admission Policies' },
    { label: 'Hostels' },
    { label: 'Other Departments' },
    { label: 'Other Queries' },
]