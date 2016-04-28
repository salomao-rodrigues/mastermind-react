import React from 'react';

class Peg extends React.Component {

  get style() {
    const style = {
      width: this.props.width * 5 / 8,
      height: this.props.height * 5 / 8,
      borderWidth: 2,
      borderColor: "black",
      borderStyle: "solid",
      borderRadius: this.props.width,
      backgroundColor: this.props.color,
      position: "absolute",
    };

    style.left = ((this.props.width / 2) - style.borderWidth - style.width / 2);
    style.top = ((this.props.height / 2) - style.borderWidth - style.height / 2);

    return style;
  }

  get wrapperStyle() {
    return {
      width: this.props.width,
      height: this.props.height,
      position: "relative",
      display: "inline-block",
    };
  }

  render() {
    return (
      <div style={this.wrapperStyle}>
        <div style={this.style} onClick={this.props.onClick} />
      </div>
    );
  }
}

Peg.propTypes = { color: React.PropTypes.string };

export default Peg;
