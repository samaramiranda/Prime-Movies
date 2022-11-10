import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <div>
          <h3>Prime</h3>
          <h3>Movies</h3>
        </div>
      </Link>

      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">x</button>
      </form>
    </nav>
  );
}
