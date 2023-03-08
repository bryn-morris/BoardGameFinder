import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { Input, Menu } from 'semantic-ui-react';

function Header() {

    const [{activeItem}, setActive] = useState({ activeItem: 'home' });

    const handleItemClick = (e, { name }) => setActive({ activeItem: name })

    return (
      <Menu secondary>
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
    )
  }

export default Header;