import { create } from "zustand";
import pedido from "./postTypes"

type PostStore = {
    pedidos: pedido[]
    add: (pedido:pedido) => void;
    delete: (pedido:pedido) => void;
}

export const laePostStore = create<PostStore>()((set)=>({
    pedidos: [],
    add: (pedido: pedido) => 
        set((state)=> ({
            pedidos: [...state.pedidos, pedido]
        })),
        delete: (pedidoToRemove: pedido) => 
        set((state) => ({
            pedidos: state.pedidos.filter(pedido => pedido !== pedidoToRemove)
        }))
}))