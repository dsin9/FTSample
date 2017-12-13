export const preferencesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PREFERENCES_SUCCESS':
            return action.preferences;
        default:
            return state;
    }
};