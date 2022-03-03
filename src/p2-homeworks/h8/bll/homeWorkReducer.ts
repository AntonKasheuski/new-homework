import {UserType} from "../HW8";

export type SortNameUpActionType = {
    type: 'sort'
    payload: 'up'
}
export type SortNameDownActionType = {
    type: 'sort'
    payload: 'down'
}
export type CheckAge18ActionType = {
    type: 'check'
    payload: 18
}
type ActionType = SortNameUpActionType | SortNameDownActionType | CheckAge18ActionType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let deepCopyOfState = state.map( u => u)
            deepCopyOfState.sort( function (a, b) {
                if (a.name > b.name) {
                    return action.payload === 'up' ? 1 : -1;
                }
                if (a.name < b.name) {
                    return action.payload === 'up' ? -1 : 1;
                }
                return 0;
            })
            return deepCopyOfState
        }
        case 'check': {
            return state.filter(u => u.age >= 18)
        }
        default: return state
    }
}