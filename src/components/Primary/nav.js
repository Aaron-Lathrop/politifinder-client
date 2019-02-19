import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {

    const links = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/news',
            text: 'News'
        },
        {
            path: '/about',
            text: 'About'
        }
    ]

    const navLinks = links.map(link => <Link to={link.path}> {link.text} |</Link>);

    return (
        <nav>
            {navLinks}
        </nav>
    );
}