import React, {Component} from 'react';
import '../App.css';

class KeypadComponent extends Component {

    render() {
        return (
            <div className="container">
                <div className="button">
                    <button className="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button className="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button className=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button className="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br />

                    <button className="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button className="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                    <button className="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button className="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                    <button className="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button className="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                    <button className="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button className="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                </div>
            </div>
        );
    }
}

export default KeypadComponent;