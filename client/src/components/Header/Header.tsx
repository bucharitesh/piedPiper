import './Header.css';
import AppLogo from '../../Assets/Logo.svg';

const Header: React.FC = () => {
    return (
        <div className="headerContainer">
            {/* Logo */}
            <div className="appLogo">
                <img src={AppLogo} alt="" />
            </div>
            {/* User Menu */}
            
        </div>
    )
}

export default Header;