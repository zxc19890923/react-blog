import React from "react";
import {Router, Route, hashHistory} from "react-router";
import $ from "jquery";
import {Menu, Icon, Row, Col, BackTop} from "antd";

import Main from "./main.jsx";
import About from "./about";
import Programmer from "./programmer";
import Basketball from "./basketball";
import Message from "./message";

var Home = React.createClass({
    getInitialState() {
        return {
            current: "home"
        }
    },
    handleClick(e) {
        console.log(e.key);
        this.setState({
            current: e.key
        })
    },
    render() {
        return (
            <div>
                {/* 顶部导航菜单 */}
                <Row>
                    <Col span={5} offset={2}>
                        <h1 style={{marginTop: 4}}>Xu and Ping</h1>
                    </Col>
                    <Col>
                        <Menu onClick={this.handleClick}
                              selectedKeys={[this.state.current]}
                              mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <a href="#/"><Icon type="home"></Icon>首页</a>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <a href="#/about"><Icon type="link"></Icon>关于我</a>
                            </Menu.Item>
                            <Menu.Item key="programmer">
                                <a href="#/programmer"><Icon type="apple"></Icon>前端开发工程师</a>
                            </Menu.Item>
                            <Menu.Item key="basketball">
                                <a href="#/basketball"><Icon type="like"></Icon>爱篮球没理由</a>
                            </Menu.Item>
                            <Menu.Item key="message">
                                <a href="#/message"><Icon type="message"></Icon>留言</a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                {/* banner图片 */}
                <Row>
                    {/*<Col span={20} offset={2}>*/}
                        <p style={{marginTop: 10, marginBottom: 10}}>
                            <img src="images/banner.jpg" width="100%"/>
                        </p>
                    {/*</Col>*/}
                </Row>
                {/* 返回顶部 */}
                <BackTop>
                    <div className="ant-back-top-inner">↑</div>
                </BackTop>
                {/* 定义路由 */}
                <Router history={hashHistory}>
                    <Route path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/programmer" component={Programmer}/>
                    <Route path="/basketball" component={Basketball}/>
                    <Route path="/message" component={Message}/>
                </Router>
            </div>
        )
    }
});
export default Home;