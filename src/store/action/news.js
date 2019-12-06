//需要渲染什么数据
export const getnewId = function mapStateToProps(state) {
  return {
    url: state.url
  }
}
//需要触发什么行为
export const setnewsID = function mapDispatchToProps(dispatch) {
  return {
    setnewsID: (url) => dispatch({
      type: 'SET_NEWS_ID',
      url: url
    })
  }
}