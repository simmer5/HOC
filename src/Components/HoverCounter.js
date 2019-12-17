import React from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends React.Component {
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
        <h1 onMouseOver={incrementCount}>Text hovered {count} times</h1>
      </>
    );
  }
}

export default UpdatedComponent(HoverCounter, 10);
