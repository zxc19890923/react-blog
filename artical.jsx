import React from "react";
import $ from "jquery";
import {Row, Col, Card, Icon} from "antd";

var Artical = React.createClass({
    getInitialState() {
        return {
            data: []
        }
    },
    componentDidMount() {
        $.get(
            "artical.json",
            function (data) {
                if (this.isMounted()) {
                    this.setState({
                        data: data
                    })
                }
            }.bind(this)
        )
    },
    render() {
        var result = this.state.data.map(function (data, i) {
            return (
                <div className="articalCard" key={i}>
                    <Card extra={data.date}>
                        <Row>
                            <Col span={2}>
                                <img src={data.img} width="100%"/>
                            </Col>
                            <Col span={21} offset={1}>
                                <h3 style={{marginBottom: 5}}><a href={data.url} target="_black">{data.title}</a></h3>
                                <p>{data.content}</p>
                            </Col>
                        </Row>
                    </Card>
                    <br/>
                </div>
            )
        });

        return (
            <div className="artical">
                <p style={{margin: 10}}>
                    <a><Icon type="book"></Icon> 推荐文章</a>
                </p>
                {/* 文章列表 */}
                {result}
            </div>
        )
    }
});
export default Artical;