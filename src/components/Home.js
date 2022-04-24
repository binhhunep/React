import React from "react";
//dung withRouter boc ben ngoai class home chung ta
// co the lay toan bo props cua withRouter dung cho Home
// nho do ma chung ta co the goi duoc lenh day sang trang todo
//sau 3 giay
import { withRouter } from "react-router";
import Color from "./HOC/color";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo"); //sau 3s se chuyen sang trang ToDo
    // }, 3000);
  }
  render() {
    return (
      <div style={{ fontWeight: "bold", fontSize: "4Vmax" }}>
        Hello World from Homepage Todolist! <br />
        <row className="mx-0">
          <Button as={Col} variant="primary">
            Enter
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Reset
          </Button>
          <Button as={Col} variant="success">
            Clear
          </Button>
        </row>
      </div>
    );
  }
}
export default Color(Home);
