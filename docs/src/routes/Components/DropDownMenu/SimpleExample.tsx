import * as React from "react";
import * as PropTypes from "prop-types";

import DropDownMenu from "react-uwp/DropDownMenu";

const baseStyle: React.CSSProperties = {
  margin: 10
};
export default class SimpleExample extends React.Component<{}, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    return (
      <div>
        <DropDownMenu
          style={baseStyle}
          values={["1", "2"]}
        />

        <DropDownMenu
          style={baseStyle}
          values={["1", "2"]}
          defaultValue="2"
        />

        <DropDownMenu
          style={baseStyle}
          values={["A", "B", "C"]}
          itemHeight={32}
          itemWidth={320}
        />

        <DropDownMenu
          style={baseStyle}
          values={["---", "A", "a"]}
          background={this.context.theme.altHigh}
        />
      </div>
    );
  }
}