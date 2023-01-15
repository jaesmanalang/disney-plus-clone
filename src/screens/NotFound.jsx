import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-5">
      <div>
        <h2 className="text-4xl font-extrabold">Page not found.</h2>
        <p className="text-lg mt-6">
          Oops! You seem to be lost. Go back to{' '}
          <Link to="/" className="underline text-blue-400">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
