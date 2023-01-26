'use client';
import { useState } from 'react';
import styles from './Notes.module.css';
import { useRouter } from 'next/navigation';


// component that handles processing form with user input to
// the database through POST request 
export default function CreateNote() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async () => {
        // nextJS 13 fetch to access pocketbase 
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });
        setContent('');
        setTitle('');

        router.refresh();
    }

    // component part that includes the form displayed to enter a new note 

    // whenever a form is submitted, the create method is used above to send a 
    // POST request to the database 
    return (
        <div className={styles.noteForm}>

            <form onSubmit={create} className={styles.myForm}>
                <h3> create a new note </h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit"> Create note </button>
            </form>
        </div>
    );

}