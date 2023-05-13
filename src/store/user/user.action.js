import { actionReducer } from "../../utils/action-reducer/action-reducer"
import { USER_ACTION_TYPES } from "./user.types"

export function setCurrentUser(user) {
  return actionReducer(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}