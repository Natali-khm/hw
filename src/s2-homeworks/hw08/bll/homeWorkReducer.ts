import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { 

    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1) 
            }
            throw new Error('action sort type error') 
        }
        case 'check': {
            return state.filter((u => u.age >= 18))
        }
        default:
            throw new Error('action type error') 
    }
}
