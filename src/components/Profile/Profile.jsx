import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';

import SvgIcon from '../SvgIcon';
import search from '../../assets/images/search.svg'
import avatar from '../../assets/images/avatar.jpg'
import profile from '../../assets/images/profile.svg'
import exit from '../../assets/images/exit.svg'
import Title from '../Title';
import { ProfileContainer } from './ProfileStyled';
import { addDetectClick, removeDetectClick } from '../../utils/detect-click'
import { connect } from 'react-redux';
import { setCurrentToken } from '../../redux/user/userAction';
const Profile = ({ setToken }) => {
    const history = useHistory();
    const [dropDown, setDropDonw] = useState(false);
    addDetectClick({setDropDonw, classes: ['dropDown__body', 'dropDown__body__avatar', 'dropDown__body__dots']})
    useEffect(() => {
        return () => {
            if (dropDown) removeDetectClick();
        }
    }, [])
    const logout = () => {
        setToken('')
        history.push('/')
    }
    return (
        <ProfileContainer>
                <SvgIcon src={search} color="#334d6e"/>
                <input type="search" placeholder="Qidiruv" />
                <div className="dropDown">
                    <div className="dropDown__body" onClick={() => setDropDonw(!dropDown)}>
                        <img className="dropDown__body__avatar" src={avatar} alt="avatar" />
                        <div className="dropDown__body__dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    
                    <div className={`dropDown__items ${dropDown ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <Link to="">
                                    <SvgIcon src={profile} color="#334d6e"/>
                                    <Title title13>Profilim</Title>
                                </Link>
                            </li>
                            <li>
                                <span onClick={logout}>
                                    <SvgIcon src={exit} color="#334d6e"/>
                                    <Title title13>Chiqish</Title>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
        </ProfileContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    setToken: item => dispatch(setCurrentToken(item))
})

export default connect(null, mapDispatchToProps)(Profile)
