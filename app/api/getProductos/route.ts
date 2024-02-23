import { NextRequest } from "next/server";
import prisma from '@/lib/db';
export async function POST(req: NextRequest) {
    try {
        const { isbody, id, session } = await req.json()
        console.log('get the productos')
        const user = await prisma.productos.findMany({
            where: {
                sessionProductos: session
            }
        })
        console.log(user, 'user')
        return Response.json({ message: "POST", user }, { status: 200 })
    }
    catch (Error) {
        console.log('Erro no getProductos', Error)
    }
}