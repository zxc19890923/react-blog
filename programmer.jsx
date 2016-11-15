import React from "react";
import $ from "jquery";
import {Row, Col} from "antd";

var Programmer = React.createClass({
    render() {
        return (
            <div className="programmer">
                <Row>
                    <Col offset={2} span={20}>
                        程序员
                    </Col>
                </Row>
            </div>
        )
    }
});
export default Programmer;