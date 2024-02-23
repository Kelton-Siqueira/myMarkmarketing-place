import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/db';

//cria uma nova lista de produtos, com o email como chave que liga aos user, e quando já ouver aumenta a quantidade
export async function POST(req: NextRequest) {

    try {
        console.log('post productos')
        const { name, id, value, description, typeProductos, session } = await req.json();
        console.log(name, id, value, description, id, 'route')
        const lst = id;
        let quatantyls = 2;
        const conter = await prisma.productos.findUnique({
            where: {
                id: lst
            }
        })
        if (conter != null) {
            console.log('existe')
            for (let i = 2; i <= conter.quantity; i++) {

                quatantyls = i + 1
            }

            const user = await prisma.productos.update({
                data: {
                    quantity: quatantyls
                },
                where: {
                    id: lst
                }
            })
            quatantyls = 1
            console.log(quatantyls, 'quantity')
            return NextResponse.json({ Message: 'POST', user }, { status: 200 })
        }
        else {
            console.log("não existe")
            const ls = await prisma.userLogin.findUnique({
                where:{
                    id
                }
            })
            const user = await prisma.productos.create({
                data: {
                    description,
                    id,
                    name,
                    quantity: 1, 
                    typeProductor: typeProductos,
                    value,
                    id_productos:`${id} + name`,
                    sessionProductos: session

                }
            })
            console.log(user)
            return NextResponse.json({ Message: 'POST', user }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({
            Message: 'ERROR ls',
            error
        }, { status: 500 })
    }

}

//remove o produto por completo
export async function DELETE(req: NextRequest) {
    const { id, name } = await req.json()
    console.log(id)
    try {
        console.log('remove', id)
        const user = await prisma.productos.delete({
            where: {
                id

            }
        })
        console.log(JSON.stringify(user))
        return NextResponse.json({ Message: 'DELETE', user }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, { status: 500 })
    }
}

//remove quantidades de produtos e remove quando chega a 0
export async function PUT(req: NextRequest) {
    const { id } = await req.json()
    try {
        const conter = await prisma.productos.findUnique({
            where: {
                id
            }
        })
        if (conter?.quantity != undefined) {
            console.log('put', id)

            if(conter.quantity > 1){
                const contaty = conter.quantity - 1
            const user = await prisma.productos.update({

                where: {
                    id: id
                },
                data: {
                    quantity: contaty
                }
            })
            return NextResponse.json({ Message: 'PUT', user }, { status: 200 })
            }

            else if(conter?.quantity <= 1){
                console.log('else fi', id)
                const user = await prisma.productos.delete({
                    where:{
                        id
                    }
                })
                return NextResponse.json({Message: "PUT", user}, { status: 200})
            }

        }
           }
    catch (error) {
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, { status: 500 })
    }
}
