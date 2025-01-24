import { Routes, Route } from 'react-router-dom'
import {
  PageHome, PageLayout, PageAlugueis,
  PageCadastrar, PageLogin, PageAdm
} from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/alugueis" element={<PageAlugueis />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="" element={<PageAdm />} />
        </Route>
      </Route>
    </Routes>
  )
}