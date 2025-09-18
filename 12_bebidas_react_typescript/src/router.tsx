import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import GenerativeAI from "./views/GenerativeAI"

const IndexPage = lazy(() => import("./views/IndexPage"))
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout />}
        >
          <Route
            path="/"
            element={
              <Suspense fallback="Cargando...">
                <IndexPage />
              </Suspense>
            }
            index
          >
          </Route>
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando...">
                <FavoritesPage />
              </Suspense>}
          >
          </Route>
          <Route
            path="/generate"
            element={
              <Suspense fallback="Cargando...">
                <GenerativeAI />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
