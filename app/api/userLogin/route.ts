import { NextRequest, NextResponse } from "next/server";
import prisma from '@/lib/db';
import bcrypt from "bcrypt";
import {v4 as uuid} from 'uuid';
import { dados } from "@/components/authUser/data";


export async function GET(req: NextRequest){

    try{
        const user = await prisma.userLogin.findMany();
        return Response.json({message:"GET", user}, {status:200})
    }catch(Error){
        return NextResponse.json({
            Message: 'ERROR',
            Error
        }, {status: 500})
    }

}

export async function POST(req: NextRequest){

    try{
        console.log('post')
        const { email, name, password } = await req.json();
        const id = uuid()
        console.log(email, name, password, id, 'route')
        const hasPassword = await bcrypt.hash(password, 10)
        const user = await prisma.userLogin.create({
            data: {
                id,
                email,
                name,
                password: hasPassword,

            },
        })

        return Response.json({Message: 'POST', user}, {status: 200})
    }catch(error){
            return NextResponse.json({
                Message: 'ERROR',
                error
            }, {status: 500})
    }

}



export async function PUT(req:Response) {
    const { id, name, password } = await req.json()
    try{
        if(!!password){
            const user = await prisma.userLogin.update({
                where: {
                    id
                },
                data: {
                    name,
                    password,
                }
            })
            console.log(JSON.stringify(user))
            return Response.json({Message: 'PUT', user}, {status: 200})
        }else{
            const user = await prisma.userLogin.update({
                where: {
                    id
                },
                data: {
                    name,
                }
            })
            console.log(JSON.stringify(user))
            return Response.json({Message: 'PUT', user}, {status: 200})
        }
    }
    catch(error){
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, {status: 500})
}
}

export async function DELETE(req:Response) {
    const { id } = await req.json()
    try{
        const user = await prisma.userLogin.delete({
            where: {
                id
            }
        })
        console.log(JSON.stringify(user))
        return Response.json({Message: 'DELETE', user}, {status: 200})
    }
    catch(error){
        return NextResponse.json({
            Message: 'ERROR',
            error
        }, {status: 500})
}
}
