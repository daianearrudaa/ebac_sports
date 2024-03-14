import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = { itens: [] }

const favoritoSlice = createSlice({
  name: 'carrinhoFavoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
        alert('Item já adicionado em favoritos')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export const favoritoReducer = favoritoSlice.reducer
