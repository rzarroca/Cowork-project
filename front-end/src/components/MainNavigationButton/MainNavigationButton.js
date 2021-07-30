import { Link } from 'react-router-dom';
import './MainNavigationButton.css';

export default function MainNavigationButton({ link }) {
    const { path, text, action, icon } = link;
    return path ? (
        <li className="mainNavigationButton shadow">
            <Link to={path}>
                <img
                    src={icon}
                    alt="Icon"
                    className="mainNavigationButtonIcon"
                />
                <br />
                {text}
            </Link>
        </li>
    ) : (
        <li className="mainNavigationButton shadow">
            <button onClick={action}>
                <img
                    src={icon}
                    alt="Icon"
                    className="mainNavigationButtonIcon"
                />
                <br />
                {text}
            </button>
        </li>
    );
}
