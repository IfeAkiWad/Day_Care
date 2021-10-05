export const fetchDaycares = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DAYCARES'})
      fetch('http://localhost:3000/daycares')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data, 'fetching daycares')
        dispatch({ type: 'ADD_DAYCARES', daycares: data })
      })
    }
  }