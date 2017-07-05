var React = require("react");
import {Link,IndexLink} from "react-router";

export var Nav = React.createClass({
  render:function(){
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">what-to-do</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Login</IndexLink>
          </li>
          <li>
            <Link to="/todo" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Todo</Link>
          </li>
        </ul>
      </div>
    </div>
  }
});
