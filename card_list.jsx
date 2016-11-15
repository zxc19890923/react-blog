import React from "react";
import $ from "jquery";
import {Card, Row, Col, Icon} from "antd";

var Card_list = React.createClass({
    getInitialState() {
        return {
            books: []
        }
    },
    componentDidMount() {
        $.get(
            "books.json",
            function (result) {
                if (this.isMounted()) {
                    this.setState({
                        books: result
                    })
                }
            }.bind(this)
        )
    },
    render() {
        // 定义循环的部分
        var books_list = this.state.books.map(function (item, i) {
            // 这里使用了 ? : 条件语句, 如果i不为0,那么前面offset={1}
            return (
                i ?
                    <Col span={4} key={i} offset={1}>
                        <Card style={{marginTop: 10, marginBottom: 10}}>
                            <img src={item.url} width="100%"/>
                            <p style={{textAlign: "center"}}><a href="#">{item.name}</a></p>
                        </Card>
                    </Col>
                    :
                    <Col span={4} key={i}>
                        <Card style={{marginTop: 10, marginBottom: 10}}>
                            <img src={item.url} width="100%"/>
                            <p style={{textAlign: "center"}}><a href="#">{item.name}</a></p>
                        </Card>
                    </Col>
            )
        });
        return (
            <div className="cards">
                <Row>
                    <p style={{marginTop: 10}}>
                        <a><Icon type="file-text"></Icon> 相关书籍</a>
                    </p>
                    {books_list}
                </Row>
            </div>
        )
    }
});
export default Card_list;