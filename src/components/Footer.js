import React from "react";
import { Menu } from 'semantic-ui-react';

function Footer() {
  return (
    <Menu className="footer" borderless>
        <Menu.Item className="ui red one item menu"
            name="Created with love by Sam Genevay and Bryn Morris :)"
        />
    </Menu>
  )
}

export default Footer;