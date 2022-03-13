export type ThemesType = 'dark' | 'red' | 'some'
type StateType = {
    theme: ThemesType
}

type ChangeThemeActionType = {
    type: "CHANGE-THEME"
    theme: ThemesType
}

const initState: StateType = {
    theme: 'some'
};

export const themeReducer = (state: StateType = initState, action: ChangeThemeActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType): ChangeThemeActionType => {
    return {type: "CHANGE-THEME", theme}
}; // fix any