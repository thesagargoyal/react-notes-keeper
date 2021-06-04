import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    
    const [note, setNote] = useState({
        title:'',
        content:''
    });

    return (
        <>
        <div className="mian_note">
            <form>
                <input type="text" value={note.title} onChange={InputEvent} autoComplete="off" placeholder="Title" />
                <textarea placeholder="Write a Note" value={note.content} onChange={InputEvent} rows="" column=""></textarea>
                <Button>
                    <AddIcon className='plus_sign' />
                </Button>
            </form>
        </div>
        </>
    );

}

export default CreateNote;