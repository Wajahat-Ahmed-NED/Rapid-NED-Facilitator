import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import './webEditor.css';

// export const text;


export function WebEdit(props) {
    const [text, setText] = useState('')

    const useStyles = makeStyles({
        field: {
            display: 'block',
            width: 600,
            height: 300,
            // margin: 0,
        }
    })
    const classes = useStyles()
    // CKEditor.config.width=500,
    console.log(text)

    return (
        <div className={classes.field} >

            <CKEditor
                editor={ClassicEditor}
                data={props.data}
                onChange={props.onChange}
                height='300'
            />
        </div>
    );

}
