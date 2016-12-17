import * as React from 'react';
import './couter.style.css';



export default class Counter extends React.PureComponent< IProp, IState >{

    static defaultProps = { };

    constructor( ) {
        super( );
        this.state = {
            count: 2
        }
    }

    add = ( ) => {
        let { count } = this.state;
        this.setState({
            count: ++count
        });
        require.ensure([],function(require){
            let a = require('./ensure');
            a.test( )
        });
    }

    del = ( ) => {
        let { count } = this.state;
        this.setState({
            count: --count
        })
    }

    render( ) {
        let { count } = this.state;
        return <div>
            <h3 className="title">{ count }</h3>
            <button onClick={this.add}>+</button>
            <button onClick={this.del}>-</button>
        </div>
    }
}

interface IState {
    count: number
}

interface IProp {

}