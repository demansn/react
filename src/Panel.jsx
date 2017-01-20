import React from 'react';
import ReactDom from 'react-dom';

import './styles/panel.scss';

function Panel() {
    return (
        <div className="panel-edit-property" >
            <header className='title'>Спрайт</header>
            <section className='properties'>
                <div className='edit-property'><div className='title'>visible</div><div className='property'><button><i className="material-icon">check_box_outline_blank</i></button></div></div>
            </section>
        </div>
    );
}

export default  Panel;