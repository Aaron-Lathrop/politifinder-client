import React from 'react';
import './landing-page.css';

import SearchLocation from '../Forms/search-location';

export default function LandingPage(props) {
    return (
        <div className="landingpage">
            <div className="landingpage__content">
                <h1>PolitiFinder</h1>
                <SearchLocation handleSearch={props.updateState} />
            </div>
        </div>
    );
}