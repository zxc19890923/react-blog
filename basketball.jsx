import React from "react";
import $ from "jquery";
import {Row, Col} from "antd";
var Basketball = React.createClass({
    render() {
        return (
            <div className="basketball">
                <Row>
                    <Col offset={2} span={20}>
                        篮球
                    </Col>
                </Row>
            </div>
        )
    }
});
export default Basketball;