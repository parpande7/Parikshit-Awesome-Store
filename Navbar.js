//rsf
import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
        
            <div>
            {//b4-navbar-minimal-ul
            }
            <nav class="navbar navbar-expand navbar-light bg-light">
                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Catalog</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;