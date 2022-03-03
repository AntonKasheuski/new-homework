export type StateType = {
    isLoading: boolean
}

type LoadingType = {
    type: string
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: LoadingType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING_STATUS": {
            const newState = {...state}
            newState.isLoading = action.isLoading
            return newState
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingType => {
    return {type: "CHANGE-LOADING_STATUS", isLoading}
} // fix any