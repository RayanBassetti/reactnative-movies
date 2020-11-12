const initialState = {
    historicFilms: []
  }
  
function manageHistoricFilms(state = initialState, action) {
    let nextState
    const historicFilmIndex = state.historicFilms.findIndex((item) => item.id === action.value.id)
    switch(action.type) {
        case 'TOGGLE_FILMDETAIL' :
            if(historicFilmIndex === -1) {
                nextState = {
                    ...state,
                    historicFilms: [...state.historicFilms, action.value]
                }
            } 
            return nextState || state
        case 'REMOVE_HISTORIC_FILM' :
            if(historicFilmIndex !== 1) {
                nextState = {
                    ...state,
                    historicFilms: state.historicFilms.filter( (item, index) => index !== historicFilmIndex)
                }

            }
            return nextState || state
        case 'RESET_HISTORIC':
            nextState = {
                ...state,
                historicFilms: []
            }
            return nextState || state

    default : 
        return state
    }
}

  export default manageHistoricFilms
  