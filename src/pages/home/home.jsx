import React from 'react';
import { Button } from 'antd-mobile';

export default  class  home extends  React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
               <Button onClick={() => this.props.history.push('/news')} type="primary">news</Button>
            </div>
        )
    } 
}