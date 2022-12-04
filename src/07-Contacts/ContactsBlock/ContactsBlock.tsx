import React from 'react';
import css from "./ContactsBlock.module.scss"
import {FindMeBlock} from "../../00-Common/components/FindMeBlock/FindMeBlock";

export const ContactsBlock = () => {
    const picSrc = "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
    return (
        <div className={css.contacts}>

            <div className={css.imageBlock}>
                <img className={css.image} src={picSrc} alt="connect"/></div>
            <div>
                <h2>Sergei Minko</h2>
                <span className={css.description}>React Frontend Developer</span>
            </div>
            <div>
                <p className={css.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
                <span className={css.span}>Phone: <a className={css.a} href="tel: +123456789">+123456789</a></span>
            </div>
            <div>
                <span className={css.span}>Email: <a className={css.a} href="mailto: serg.ks@gmail.com">serg.ks@gmail.com</a></span>
            </div>
            <FindMeBlock/>
        </div>
    );
};

