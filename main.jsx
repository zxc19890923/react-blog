import React from "react";
import $ from "jquery";
import {Row, Col} from "antd";

import Complete from "./auto_complete";
import Card_list from "./card_list";
import Artical from "./artical";

var Main = React.createClass({
    render() {
        return (
            <div className="main">
                <Row>
                    <Col span={20} offset={2}>
                        {/* 自动完成组件 */}
                        <Complete />
                        {/* 书籍卡片列表 */}
                        <Card_list />
                        {/* 文章列表 */}
                        <Artical />
                    </Col>
                </Row>
            </div>
        )
    }
});
export default Main;