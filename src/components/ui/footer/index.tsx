import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-12 container">
      <div className="border-t py-5">
        <Link className="has-line-after" to="mailto:me@adebayoade.com">
          me@adebayoade.com
        </Link>
      </div>
    </footer>
  );
}
