import prisma from '@/lib/db';
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';




export async function POST(req: NextRequest){

    try{
        const { email, password } = await req.json();         
        const user = await prisma.userLogin.findMany()
        
        user.map((e) => {
                
               if(e.email != null || e.password != null){
                const isUific = async()=>{
                    const isUnific = await prisma.userLogin.findUnique({
                        where:{
                            email: e.email
                        }
                    })
                    if(isUnific != null){
                        const l =  async () => {
                            const bry = await compare( password, e.password)
                            console.log(password, e.password , bry)
                            console.log(bry)
                              if(bry){
                                console.log('as senhas sao iquais')
                           }else console.log("AS senhas são diferentes")
                            }
                            l()    
                            console.log(e)
                            return Response.json({Message: 'POST', isUnific}, {status: 200})
                       }else console.log("email invalido")
                    
                }
                isUific()
               }
        })
        
    }catch(Error){
            return NextResponse.json({
                Message: 'ERROR',
                Error
            }, {status: 500})
    }

}