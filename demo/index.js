
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Switch from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认开关","code":"/**\n *\n * @title 默认开关\n * @description\n *\n */\nimport React, {Component} from 'react';\nimport {Row, Col } from 'bee-layout';\nimport Switch from 'bee-switch';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            defaultChecked:true,\n            checked:true\n        };\n    }\n    defaultCheckChange = () => {\n        this.setState({\n            defaultChecked: !this.state.defaultChecked\n        })\n    }\n    render() {\n        return (\n            <Row>\n                <Col sm={2}>\n                    <Switch/>\n                </Col>\n                <Col sm={2}>\n                    <Switch defaultChecked={this.state.defaultChecked} onChangeHandler={this.defaultCheckChange}/>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":""},{"example":<Demo2 />,"title":" 不同大小的开关","code":"/**\n *\n * @title 不同大小的开关\n * @description 通过`size`属性控制开关的大小\n *\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport Switch from 'bee-switch';\n\nclass Demo2 extends Component {\n\n    render () {\n        return (\n            <Row>\n                <Col sm={2}>\n                    <Switch size='sm' />\n                </Col>\n                <Col sm={2}>\n                    <Switch  />\n                </Col>\n                <Col sm={2}>\n                    <Switch  size='lg' />\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过`size`属性控制开关的大小"},{"example":<Demo3 />,"title":" 事件开关","code":"/**\n *\n * @title 事件开关\n * @description 点击开关触发事件\n *\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport Switch from 'bee-switch';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            switch : \"\",\n            checked: false\n        };\n        this.changeHandle = this.changeHandle.bind(this);\n    }\n    changeHandle(e){\n\t\tthis.setState({\n            switch: `${e}`,\n            checked: !this.state.checked\n        })\n\t}\n\n    render () {\n        return (\n            <Row>\n                <Col sm={2}>\n                    <Switch defaultChecked={this.state.checked}   onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />\n                </Col>\n                <Col sm={2}>\n                    <span>{ this.state.switch }</span>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 点击开关触发事件"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
