export default function (state={a:111,url:null},action) {
    switch (action.type) {
      case 'USER':
        return {
          ...state,
          name: action.name
        }
      case 'SET_NEWS_ID':
          return {
            ...state,
            url: action.url
          }
      default:
        return state;
    }
  }