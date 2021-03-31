import React from 'react';
import ProjectileHandler from '../utils/projectile-handler';

class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.maxVelocity = 45;
        this.state = {
            'coordinates': [this.props.xCoord,this.props.yCoord],
            'time': 0
        }
        this.ballCoordinates = {
            'top': this.state.coordinates[1],
            'left': this.state.coordinates[0]
        };
        this.projHandler = new ProjectileHandler(this.state.coordinates);
        this.HandleFrameChange();
    }

    HandleFrameChange() {
        const tempTime = this.state.time;
        const bottomWindowBoundary = 550;
        const isBounce = this.projHandler.HandleBounceVertical(this.state.time, bottomWindowBoundary);
        if (isBounce) {
            this.setState({
                'time': 0
            });
        }
        this.setState({
            'coordinates': this.projHandler.GetCoordinatesAtTime(this.state.time),
            'time': tempTime + 0.01
        });
    }

    componentDidUpdate() {
        this.HandleFrameChange(); 
        this.ballCoordinates = {
            'top': this.state.coordinates[1],
            'left': this.state.coordinates[0]
        };
    }

    render() {
        return <div className="circle" style={this.ballCoordinates}></div>;
    }
}

export default Ball;