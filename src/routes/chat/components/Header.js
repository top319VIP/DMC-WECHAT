import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Http from './../../../utils/http';
import s from '../style/header.scss';

class Header extends React.Component {
    componentWillMount() {
        this.setState({
            user: []
        })

    }
    componentDidMount() {

    }
    render() {
        return(
            <div className={s.head}>
                <div alt='log'></div>
                <div>
                    <i className={s.iconfont} alt='搜索'>&#xe607;</i>
                    <input type="text" onChange={this.searchVal.bind(this)}/>
                </div>
            </div>
        )
    }
    searchVal(e) { 
        // console.log(e.target.value)
        this.props.search(e.target.value);
    }
    // componentWillReceiveProps() { }
}
export default withStyles(s)(Header);
