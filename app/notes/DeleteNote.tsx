'use client';
import { useState } from 'react';
import styles from './Notes.module.css';
import { useRouter } from 'next/navigation';

interface Props {
  noteId: string;
}

export default function DeleteNote({ noteId }: Props) {
  const router = useRouter();

  const deleteNote = async () => {
    // nextJS 13 fetch to access pocketbase
    await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
      method: 'DELETE',
    });
    router.refresh();
  };

  return (
    <div>
      <button onClick={deleteNote}> Delete</button>
    </div>
  );
}
