/**
 * Created by miclos on 7/19/17.
 */
import React, {Component} from 'react';
import Resizer from './Resizer';


class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            initialWidth: this.props.initWidth,
            initialHeight: this.props.initHeight
        };
    }

    render(){
        const initialWidth = this.state.initialWidth;
        const initialHeight = this.state.initialHeight;


        return(
            <div className="box" style={{width:initialWidth, height:initialHeight}}>
                <Resizer/>
            </div>
        );
    }

}

export default Box;