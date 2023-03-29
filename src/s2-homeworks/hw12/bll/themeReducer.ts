
const initState = {
    themeId: 1 as number,
}

type ThemeStateType = typeof initState
type ChangeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdAT): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id })
