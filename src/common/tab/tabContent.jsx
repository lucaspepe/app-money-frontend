import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Condition from '../operator/condition'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        return (
            <Condition test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active': ''}`}>
                    {this.props.children}
                </div>
            </Condition>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)