const initState = {
    isLoading: false,
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export type LoadingStateType = typeof initState

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
}}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
