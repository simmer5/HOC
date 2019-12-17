import React from "react";

//Naming Convencion
//const UpdatedComponent = withCounter
//OriginalComponent = WrappedComponent
//newComponent = WithCounter (note. PascalCase)
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class newComponent extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // here we getting all the props from component button and hover ex. name
        />
      );
    }
  }
  return newComponent;
};
export default UpdatedComponent;
