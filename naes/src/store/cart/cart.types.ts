import { CategoryItem } from "../categories/category.types";
import {ActionWithPayload} from "../../utils/reducer/reducer.types"

export enum CART_ACTIONS_TYPE {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {quantity: number}

export type CartMap = Array<CartItem> & {total: number}

export type SetCartItems = ActionWithPayload<
  CART_ACTIONS_TYPE.SET_CART_ITEMS,
  Array<CartItem>
>;

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTIONS_TYPE.SET_IS_CART_OPEN,
  boolean
>;

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: Array<CartItem>;
};