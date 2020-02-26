import { LOCATION_CHANGE } from './actionType'

export default function (history) {
    const initial = {
        action:history.action,
        location:history.location
    }
    return function (state = initial,action) {
        switch (action.type) {
            case LOCATION_CHANGE:
                return action.payload
            default:
                return state
        }
    }
}