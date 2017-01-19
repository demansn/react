import React from 'react';
import ReactDom from 'react-dom';

import './styles/panel.scss';

function Panel() {
    return (
        <div className="panel-edit-property" >
            <header className='title'>Спрайт</header>
            <section>
                <div><span>visible</span><span><button><i></i></button></span></div>
            </section>
        </div>
    );
}

export default  Panel;