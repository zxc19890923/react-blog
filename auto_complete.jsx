import React from "react";
import {AutoComplete, Row, Col, Icon, Button} from 'antd';

const Option = AutoComplete.Option;

const Complete = React.createClass({
    getInitialState() {
        return {
            result: [],
        };
    },
    handleChange(value) {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({result});
    },
    render() {
        const {result} = this.state;
        const children = result.map((email) => {
            return <Option key={email}>{email}</Option>;
        });
        return (
            <div>
                <Row>
                    <Col span={21}>
                        <AutoComplete style={{width: "100%"}} onChange={this.handleChange}>
                            {children}
                        </AutoComplete>
                    </Col>
                    <Col span={2} offset={1}>
                        <Button type="primary" icon="search">搜索</Button>
                    </Col>
                </Row>
            </div>
        );
    },
});
export default Complete;