
import React from 'react';
import style from './Spinner.css';

export default class Spinner extends React.Component {
    render() {
        return (
                <div className={style.spinner}>
                <div className={style.rect1}></div>
                <div className={style.rect2}></div>
                <div className={style.rect3}></div>
                <div className={style.rect4}></div>
                <div className={style.rect5}></div>
                </div>
            );

    }
}
