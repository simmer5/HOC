import React from "react";

import UpdatedComponent from "./withCounter";

class ButtonCounter extends React.Component {
  // This is normal statefull class component.
  // and commented part will be shered from HOC as a props
  //   state = { count: 0 };

  //   incrementCount = () => {
  //     this.setState(prevState => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <button onClick={incrementCount}>Button clicked {count} times</button>
        <h3>{this.props.name}</h3>
      </>
    );
  }
}

export default UpdatedComponent(ButtonCounter, 5);
