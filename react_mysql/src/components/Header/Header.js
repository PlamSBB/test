import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//import {Link} from 'react-router'

class Header extends Component {
    render() {
        return (
            
        <div class="bg-text">
            
            <a href="/Register">
                <FontAwesomeIcon id='ic1' icon={faEdit} />
            </a>
            
            <a href="/Contact">
                <FontAwesomeIcon id='ic' icon={faAddressBook} />
            </a>
            

        </div>

        
        
    );
    }
}
export default Header;