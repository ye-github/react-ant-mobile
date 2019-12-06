import React from 'react';
import { connect } from 'react-redux'
import { getnewId, setnewsID } from '../../store/action/news'
import { getList } from '../../api/home'

import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class News extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
          getList({type:'top',key:'842ab7ccf38251664acc12a7faca96c9'}).then(res =>{
              console.log(res)
            if(res.error_code === 0){
                this.setState({
                    list:res.result.data
                })
            }
          })
    }
    goDetail(url){
     this.props.setnewsID(url)
      this.props.history.push('/details')
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((val, index) => {
                        return (
                            <List key={index} className="my-list">
                                <Item arrow="horizontal" multipleLine onClick={() => this.goDetail(val.url)}>
                                    {val.title} <Brief><img alt="" src={val.thumbnail_pic_s} /></Brief>
                                </Item>
                            </List>
                        )
                    })

                }
            </div>
        )
    }
}


export default connect(getnewId,setnewsID)(News)