/**
 * @desc: 文件描述
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React, {Component} from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const {default: component} = await importComponent()
      this.setState({component})
    }
    render() {
      const C = this.state.component
      return C?<C {...this.props} />: null
    }
  }
  return AsyncComponent
}