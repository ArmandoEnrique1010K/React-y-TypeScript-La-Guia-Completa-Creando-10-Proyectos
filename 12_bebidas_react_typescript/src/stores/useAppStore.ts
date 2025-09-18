import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { AISliceType, createAISlice } from "./aiSlice"
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice"
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...createAISlice(...a)
})))
