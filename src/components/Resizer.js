/**
 * Created by miclos on 7/19/17.
 */
import React, {Component} from 'react';

class Resizer extends Component {
    constructor(props){
        super(props);
        this.state = {visible: true};

        this.copyClientRect = this.copyClientRect.bind(this);
    }

    componentDidMount(){
        const parentSize = this.refs.child.parentNode.getBoundingClientRect();
        console.log(parentSize);
        const dimensions =  this.copyClientRect(parentSize);
        console.log("dimensions: ", dimensions);

        this.setState({
            dimensions: dimensions
        });

        //console.log(this.state.dimensions);
    }

    copyClientRect(bounds = {}){
        console.log(bounds);
        if(bounds instanceof ClientRect) {
            //do nothing right now
        }
        /*
         bottom:380.875
         height:300
         left:0
         right:500
         top:80.875
         width:500
         */

        return {
            width: bounds.width,
            height: bounds.height,
            top: bounds.top,
            left: bounds.left,
            right: bounds.right,
            bottom: bounds.bottom
        }

    }


    render(){

        const dim = this.state.dimensions;
        const styles = {...dim,
            background: "rgba(255,255,255,0.4)",
            border:"dashed 3px red",
            position:"absolute",
            zIndex:"999",
            boxSizing:"border-box",
            pointerEvents: "none"
        };

        const handleStyles = {
            position:"absolute",
            top:"0",
            bottom:"0",
            right:"0",
            width:"10px",
            background:"pink",
            zIndex:"9999",
            boxSizing:"border-box",
            cursor:"pointer",
            pointerEvents: "auto"
        };

        console.log(styles);


        return (
            <div className="resizer" ref="child" style={styles}>
                <div className="handle" style={handleStyles}/>
            </div>
        );
    }
}

export default Resizer;