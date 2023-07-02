// Write your code here

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = props => {
  console.log(props)

  const onChangeRoute = () => {
    const {history} = props

    history.replace('/')
  }

  return (
    <div className="header-section">
      <button type="button" className="logo-button" onClick={onChangeRoute}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </button>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="menu">
              <li>
                <Link to="/" className="nav-link">
                  <button className="home-button" type="button">
                    <AiFillHome className="home-icon" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <button className="home-button" type="button">
                    <BsInfoCircleFill className="home-icon" />
                    About
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default withRouter(Header)
