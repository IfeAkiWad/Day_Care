export const submitToddlers = (toddler, daycareId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/daycares/${daycareId}/toddlers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },  
        body: JSON.stringify(toddler)
      })
      .then(response => response.json())
      .then(toddler => {
        console.log(toddler, "submitting toddler")
        dispatch({ type: 'ADD_TODDLERS', payload: toddler })
      })
    }  
}

export const fetchToddlers = (daycareId) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TODDLERS'})
      fetch(`http://localhost:3000/daycares/${daycareId}/toddlers`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data, 'fetching toddlers')
        dispatch({ type: 'ADD_TODDLERS', payload: data })
      })
    }
}