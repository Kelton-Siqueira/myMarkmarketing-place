import prisma from '@/lib/db';
import React, { Dispatch, SetStateAction, use } from 'react';
import { json } from 'stream/consumers';
export interface infor {
    name: string;
    id: string;
    value: string;
    description: string;
    image?: string;
    session?: string;
    typeProductos: string;
}

async function addProductor({ name, id, value, description, typeProductos, session }: infor) {

    const response = await fetch("/api/productos", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            id,
            value,
            description,
            typeProductos,
            quantity: 1,
            session
        })


    });
    if (!response.ok) throw new Error("Erro no response post do Productos...")
}

async function delelteProductor({ id }: { id: string }) {
    const response = await fetch("/api/productos", {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
        })

    });
    if (!response.ok) throw new Error("Erro no response do Productos...")
}
async function removeDataQuantity({ id }: { id: string }) {
    const response = await fetch("/api/productos", {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
        })

    });
    if (!response.ok) throw new Error("Erro no response do Productos...")
}

async function exportquantity({ id }: { id: string }) {

    return 'oi'
}

async function getProductos({ id, session }: { id: string; session: string }) {
    const isbody = true
    const response = await fetch("/api/getProductos", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            session,
            isbody
        })

    });
    console.log(use)
    if (!response.ok) throw new Error("Erro no response do Productos...")
    return await response.json()
}

export { addProductor, delelteProductor, removeDataQuantity, exportquantity, getProductos }