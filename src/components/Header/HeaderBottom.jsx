import React, { useEffect, useRef } from 'react';
import './HeaderBottom.css';
import Search from '../../assets/img/search-icon.svg';
import Cart from '../../assets/img/shopping-cart.png';
import Heart from '../../assets/img/heart.png';
import User from '../../assets/img/user.png';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/paramsSlice';

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const headerRef = useRef();

  const handleScroll = () => {
    if (window.pageYOffset >= 223) {
      headerRef.current.classList.add('_header__fixed');
    } else {
      headerRef.current.classList.remove('_header__fixed');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onChangeSearch = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className="header__bottom-wrapper" ref={headerRef}>
      <div className="header__bottom">
        <div className="header__bottom-items">
          <div className="header__bottom-dropdown">
            <button className="dropdown-btn">
              Каталог товарів <span>▼</span>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="header__bottom-search">
            <input
              type="text"
              placeholder="Search ..."
              onChange={(event) => onChangeSearch(event)}
            />
            <img src={Search} alt="Search" className="search-icon" />
          </div>
          <div className="header__bottom-nav">
            <div className="nav__cart-wrapper _nav__design">
              <img src={Cart} alt="Cart" className="nav__cart _nav__icons" />
            </div>
            <div className="nav__favorite-wrapper _nav__design">
              <img src={Heart} alt="Heart" className="nav__favorite _nav__icons" />
            </div>
            <div className="nav__user-wrapper _nav__design">
              <img src={User} alt="User" className="nav__user _nav__icons" />
            </div>
            <p className="nav__user-log-sign">Увійти або Зареєструватися</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
