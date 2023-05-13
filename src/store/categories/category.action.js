import {actionReducer} from '../../utils/action-reducer/action-reducer'
import { CATEGORIES_ACTION_TYPES } from './category.type'

export function setCategories(categories) {
  return actionReducer(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
}