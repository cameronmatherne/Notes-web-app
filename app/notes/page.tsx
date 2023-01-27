import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';
import DeleteNote from './DeleteNote';
import AddNote from './AddNote';


async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <>
      <h1>Notes</h1>
      <div className="header" style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "25px",
      }}>
        <AddNote />
        <DeleteNote />
        <Link href="./">
          <button> Return to homepage </button>
        </Link>
      </div>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />

    </>
  );
}

function Note({ note }: any) {
  //const { id, title, content, created } = note || {};
  let id, title, content, created;
  let currentDate = new Date();

  if (note) {
    id = note.id;
    title = note.title;
    content = note.content;
    created = note.created;
  } else {
    id = undefined;
    title = undefined;
    content = undefined;
    created = undefined;
  }

  return (
    <div className={styles.note}>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </div>
  );
}