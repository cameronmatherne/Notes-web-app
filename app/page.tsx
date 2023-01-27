import Link from 'next/link';

export default function HomePage() {

    return (
      <div>
        <h1> Notes application</h1>
        <Link href="./notes">
          <button> Go to notes </button>
        </Link>
      </div>

    );
  }