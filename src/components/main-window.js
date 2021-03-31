import React from 'react';
import Ball from './ball';

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            'balls': [] 
        };
        this.HandleClick = this.HandleClick.bind(this);
        this.content = [];
    }
    
    HandleClick(e) {
        let tempBalls = [...this.state.balls];
        //e.screenX and e.screenY, representing the coordinates of the mouse upon clicking, are used to assign the starting point of a ball.
        //Developer notes: This is bit hacky, it could do with some further investigation into a more intuitive way of assigning object coordinates.
        const coordinatesOffset = [ -120, -240]
        tempBalls.push({
            'id': this.state.balls.length + 1,
            'x': e.screenX + coordinatesOffset[0],
            'y': e.screenY + coordinatesOffset[1]
        });
        //Developer notes: Known defect, e.screenX and e.screenY are taking values from the previous mouse click.
        this.setState({
            'balls': tempBalls
        });
        this.state.balls.forEach( ball => {
            this.content.push(<Ball id={ball.id
            } xCoord={ball.x} yCoord={ball.y}/>);
        });
    }

    componentDidUpdate() {
        this.state.balls.forEach( ball => {
            this.content.push(<Ball id={ball.id
            } xCoord={ball.x} yCoord={ball.y}/>);
        });
    }

    render() {
        return (
            <main>
                <table width="95%" align="center">
                    <tbody>
                        <tr>
                            <td width="1100" height="567" id="MainWindow" onClick={this.HandleClick}>
                                {this.content}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        );
    }
}

export default MainWindow;