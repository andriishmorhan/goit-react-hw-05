import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div>
            <p>Oops! Not found!</p>
            <Link to="/">Back to home page!</Link>
        </div>
    )
}