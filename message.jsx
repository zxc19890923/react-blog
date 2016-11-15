import React from "react";
import $ from "jquery";
import {Row, Col} from "antd";

var Message = React.createClass({
    render() {
        return (
            <div className="message">
                <Row>
                    <Col offset={2} span={20}>
                        留言
                    </Col>
                </Row>
            </div>
        )
    }
});
export default Message;