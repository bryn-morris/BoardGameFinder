import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { Input, Menu, Image} from 'semantic-ui-react';

function Header({searchedValue}) {

    const [{activeItem}, setActive] = useState({ activeItem: 'home' });

    const handleItemClick = (e, { name }) => setActive({ activeItem: name })

    // more code for search
    // const handleSearchInputChange = (e) => {
    //     searchedValue(e.target.value);
    //   }

    return (
        <div className="headerContainer">
            <Menu secondary>
                <Image 
                    className="logoImage"
                    circular
                    src="https://media.istockphoto.com/id/1338328654/vector/board-game-piece-icon-flat.jpg?s=612x612&w=0&k=20&c=9Vv3xroz6-zJU-abYm01iyqAG8S45xHvYOKfVOlnLWo=" 
                    alt="logo"
                    width={50}
                    height={50}
                />
                <Menu.Item className="logoText">Game On!</Menu.Item>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    exact to="/"
                    as={NavLink}
                />
                <Menu.Item
                    name='view board games'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                    to="/BoardGameContainer"
                    as={NavLink}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
      </div>
    )
  }

export default Header;