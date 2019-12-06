//需要渲染什么数据
export const getUser = function mapStateToProps(state) {
  return {
    userInfo: state
  }
}
//需要触发什么行为
export const getUserAction = function mapDispatchToProps(dispatch) {
  return {
    UpdateUser: (user) => dispatch({
      type: 'USER',
      name: user
    })
  }
}