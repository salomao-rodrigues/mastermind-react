import React from 'react';

class PegSlot extends React.Component {
  get style() {
    return {
      position: "relative",
      width: this.props.width,
      height: this.props.height,
      display: "inline-block"
    };
  }

  get innerStyle() {
    const size = 8;

    return {
      borderRadius: (size / 2),
      width: size,
      height: size,
      backgroundColor: "black",
      left: ((this.props.width / 2) - (size / 2)),
      top: ((this.props.height / 2) - (size / 2)),
      position: "absolute"
    };
  }

  get outerStyle() {
    const outer = this.innerStyle;
    outer.width *= 2.5;
    outer.height *= 2.5;
    outer.borderWidth = 2;
    outer.borderColor = "black";
    outer.borderStyle = "solid";
    outer.left = ((this.props.width / 2) - outer.borderWidth - outer.width / 2);
    outer.top = ((this.props.height / 2) - outer.borderWidth - outer.height / 2);
    outer.backgroundColor = "transparent";
    outer.position = "absolute";

    //Adding 5 pixes to make sure it is a circumference...
    outer.borderRadius = ((outer.width + outer.borderWidth) / 2) + 5;

    return outer;
  }

  render() {
    return (
      <div style={this.style}>
        <div style={this.innerStyle} />
        <div style={this.outerStyle} />
      </div>
    );
  }
}

export default PegSlot;
