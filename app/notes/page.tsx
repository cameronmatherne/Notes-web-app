// import PocketBase from 'pocketbase';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';


// function that uses reactJS 13 fetch feature to access database
// through pocketbase 
async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}


// React component that displays most of the content 
// (App title, all the notes, and the form to create a new note )
export default async function NotesPage() {
  const notes = await getNotes();
  return(
    <div>
      <h1>Notes app</h1>

      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />

    </div>
  );
}

// Note function that will display every note and its content 
function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
      <div className={styles.note}>
        <h2>{title} </h2>
        <h5>{content}</h5>
        <p>Date created: {created}</p>
      </div>
  );
}