import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import * as S from './styles';

function Header() {
    return (
        <S.Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUser size={24} />
            </Link>
            <Link to="/asd">
                <FaSignInAlt size={24} />
            </Link>
        </S.Nav>
    );
}

export default Header;
