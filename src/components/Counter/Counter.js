import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { receiveValue, setLoadingStatus } from '../../actions';
import { Spinner } from '../';
import style from './Counter.css';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }


    componentDidMount() {
        let getNumber = () => {
            axios.get('counter').then(response => {
                this.props.onReceive(response.data.number);
                setTimeout(getNumber, 1000 * 5); // REPEAT EVERY 5 SECONDS
            });
        };

        // SHOW LOADING SPINNER FOR 500ms
        setTimeout(getNumber, 500);
    }

    render() {

        let spinner = (<Spinner/>);
        let number = (
            <div className={style.number}
                ref={ (ref) => { this.element = ref } }>
                    {this.props.value}
            </div>
        );


        let view = this.props.isLoading ? spinner : number;
        let cursorStyle = this.props.isLoading ? { cursor: 'default' } : { cursor: 'pointer' };

        return (            
            <div className={style.container} style={cursorStyle} onClick={this.onClick}>
                <div className={style.center}>{view}</div>
            </div>
        );
    }

    componentDidUpdate() {
        // CSS ANIMATION EFFECT WHEN THE COMPONENT UPDATES
        if(!this.props.isLoading){
            this.element.classList.remove(style.bounce);
            this.element.offsetWidth;
            this.element.classList.add(style.bounce);
        }
    }


    onClick() {
        if(this.props.isLoading)
            return;

        axios.post('/counter/').then(response => {
            this.props.onReceive(response.data.number); 
        }); 
    }

}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReceive: (value) => { 
                dispatch(receiveValue(value));
                dispatch(setLoadingStatus(false));
            },
        onRequest: () => { dispatch(setLoadingStatus(true)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
