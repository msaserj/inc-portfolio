import React from 'react';
import css from './Footer.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'

export const Footer = () => {
    return (
        <div className={css.footerBlock}>
            <div className={`${styleContainer.container} ${css.footerContainer}`}>
                <h2 className={css.title}>Vasya Pupkin</h2>
                <div className={css.social} >
                    <div>GitHub</div>
                    <div>LinkedIn</div>
                    <div>itra.run</div>
                </div>
                <h3 className={css.title}>Gnu GPL</h3>
            </div>
        </div>
    );
};


