import { dados } from '@/components/authUser/data';
import prisma from '@/lib/db';
import bcrypt from "bcrypt";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';




export async function POST(req: NextRequest){
    try{
       
        const { email, password, name, id_user } = await req.json(); 
        console.log("post", email, name) 
        const hasPassword = await bcrypt.hash(password, 10)       
        const lt = await prisma.userLogin.findUnique({
            where: {
                email
            }
        })
        console.log(lt)
        if(!!lt){
            console.log('if')
            return Response.json({Message: 'Usuario já logodo', }, {status: 300})
        }
        else{
            const user = await prisma.userLogin.create({
                data: {
                    email,
                    password: hasPassword,
                    name,
                    id: id_user
                }
            })
            return Response.json({Message: 'POST', user}, {status: 200})
        }
    }catch(error){
            return NextResponse.json({
                Message: 'ERROR',
                error
            }, {status: 500})
    }
}