import React from 'react';
import { connect } from 'react-redux'
import { getnewId } from '../../store/action/news'

class  Details extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            url:''
        }
    }
    componentDidMount(){
      this.setState({
        url: this.props.url
      })
    }
    render(){
        return (
            <div>
                <iframe title="details" className="news-detail" src={this.state.url}></iframe>
            </div>
        )
    } 
}

export default connect(getnewId)(Details)