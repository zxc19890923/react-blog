import React from "react";
import $ from "jquery";
import {Row, Col, Timeline} from "antd";

var About = React.createClass({
    render() {
        return (
            <div className="about">
                <br/>
                <Row>
                    <Col span={20} offset={2}>
                        <Timeline pending={<a href="#/about">更多</a>}>
                            <Timeline.Item>
                                <p>
                                    <a>1989年9月23日</a>
                                </p>
                                <p>
                                    <span>英俊潇洒的我出生了</span>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>1996年9月1日</a>
                                </p>
                                <p>
                                    <span>太阳当空照，花儿对我笑！小鸟说早早早，你为什么背着小书包, 我去上学校。</span>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        2002年9月1日
                                    </a>
                                </p>
                                <p>
                                    学校: 南寨中学
                                </p>
                                <p>
                                    目标: 考上千阳县高中
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        2005年9月1日
                                    </a>
                                </p>
                                <p>
                                    如愿以偿的考上了千阳县高中的普通班, 差2分就能进重点班, 谁知道认识的这一波人将改变我的人生。
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        2008年9月1日
                                    </a>
                                </p>
                                <p>
                                    这一年发生了好多事情, 汶川地震了, 灾难带走了好多人的生命, 为死者祈福, 我也进入了9等大学, 开始了我的大学生活。
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        20011年7月1日
                                    </a>
                                </p>
                                <p>
                                    这一年我大学毕业了, 开过淘宝店, 做过兼职, 被骗过, 被嘲笑过, 没钱, 被别人看不起。
                                </p>
                                <p>
                                    这一年我去了大连, 呵呵......心里的委屈......
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        20012年9月1日
                                    </a>
                                </p>
                                <p>
                                    这一年我回到了西安, 在淘宝店干活, 摄影店干过, 创业公司干过, 跑过腿, 买过饭, 住过不见天日的房子, 月底没钱吃饭, 一双40块钱的鞋穿到鞋底磨透, 哭过。
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        20013年8月12日
                                    </a>
                                </p>
                                <p>
                                    这一年我去了上海金仕达卫宁软件股份有限公司, 认识了杨哥,徐露露, 侯克强, 席小星, 生活有了好转, 杨哥对我们关心备至, 徐露露是一个非常热心肠的人, 我们四处爬山, 我第一次坐了飞机, 去过几次大上海, 感谢他们。
                                </p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>
                                    <a>
                                        20015年12月7日
                                    </a>
                                </p>
                                <p>
                                    这一年我不顾朋友, 家人的劝阻, 在快要过年的时候我来到了北京, 开始了北漂生活, 找工作还算顺利。
                                </p>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div>
        )
    }
});
export default About;