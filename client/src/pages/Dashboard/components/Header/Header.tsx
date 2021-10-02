import './Header.css';
import AppLogo from '../../../../assets/Logo.svg';
import Avatar from '../../../../shared/components/Avatar/Avatar';
import DefaultAvatar from '../../../../assets/images/avatarDefault.jpg';
import { BsCaretDownFill } from 'react-icons/bs';

const Header: React.FC = () => {
    return (
        <div className="headerContainer">
            {/* Logo */}
            <div className="appLogo">
                <img src={AppLogo} alt="" />
                <div className="appName">
                    <span className="appTitle">Pied Piper</span>
                    <span>compression cloud ( Beta )</span>
                </div>
            </div>
            {/* User Menu */}
            <div className="userMenu">
                <span>Richard Hendrics <BsCaretDownFill/></span>
                <Avatar src={DefaultAvatar} alt="UserName aayega" />
            </div>
        </div>
    )
}

export default Header;