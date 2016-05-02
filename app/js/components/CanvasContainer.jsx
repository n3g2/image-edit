var React = require('react');
var ReactDOM = require('react-dom');
require('../../styles/canvas-container.less');

var CanvasContainer = React.createClass({
    getDefaultProps: function () {
        return {
            imageData: null,
            width: "0px",
            height: "0px"
        }
    },
    getInitialState: function () {
        return this.props;
    },
    render: function () {
        var canvasStyle =  {
            width: this.state.width,
            height: this.state.height
        }
        return <div className="canvas-container">
           <canvas ref="canvas" width={canvasStyle.width} height={canvasStyle.height}></canvas>
        </div>
    },
    componentDidMount: function () {
        if( !this.state.imageData ) {
            return;
        }
        // var canvas = this.refs.canvas; //warning.js:45 Warning: ReactDOMComponent: Do not access .props of a DOM node;
        var canvas = ReactDOM.findDOMNode(this).getElementsByTagName("canvas")[0];
        var context = canvas.getContext("2d");
        context.drawImage(this.state.imageData, 0, 0, this.state.width, this.state.height);
    }
});

module.exports = CanvasContainer;