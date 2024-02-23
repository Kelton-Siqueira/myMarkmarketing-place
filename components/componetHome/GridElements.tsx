'use client'
import { Separator } from "@radix-ui/react-separator";
import  {laePostStore}  from '@/app/storage/postStorage'
import onStorage from "@/app/storage/setStorage";
import { addProductor, exportquantity, getProductos, removeDataQuantity } from "@/app/Features/productos";
import { useState } from "react";
import { useSession } from "next-auth/react";
 export interface Elements{
    dados:      Array<infor>;
    values?:    string;
}

export interface infor {
        name:           string;
        id:             string;
        value:          string;
        description:    string;
        image?:         string;
        typeProductos:  string;
}

export default function GridElements({ dados, values }:Elements){
    try{
        const lst = useSession()
        const session = lst.data?.user?.email ? lst.data?.user?.email : ''
        console.log(lst.data, 'data')
        const pedidos = laePostStore().pedidos
        
        console.log(pedidos, 'pedidos')
        const newDados = []

        for(let i = 0; i < dados.length; i++){
            if(!!values){
                if(dados[i].name.indexOf(values) != -1){
                (dados[i].name)
                     newDados.push(dados[i])
                }
            }
        }
        console.log(newDados, values)
        
        
        if(dados[0].description || dados[0].name){
            if(!newDados[0]){
                
                return dados.map(({ name, description, id, value, image, typeProductos }: infor) => {
                    const productor = onStorage({name, id, quantity: 3})
                    
                    return (
                        <div key={id} className="h-[15rem] w-[10rem] my-3  mx-6  md:h-[25rem] md:w-[25rem] overflow-y-hidden bg-green-200 flex flex-col gap-1 p-4">
                            <div className="flex justify-end flex-col">
                                <h1 className="text-lg font-bold ">{name}</h1>
                                <p className="">{value}</p>
                            </div>
                            <Separator className="bg-red-500" />
                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                            <img className="h-[5rem] md:h-[15rem]" src={image} alt={name}  />
                            <p>{description}</p>
                            <div className="flex gap-2" >
                                <button className="bg-green-600" onClick={() => addProductor({name, id, value, description, typeProductos, session})} >
                                    adic
                                </button>
                                <button className="bg-blue-500" onClick={() => removeDataQuantity({id})} >
                                    remover
                                </button>
                                <button className="bg-red-500" onClick={() => getProductos({id, session})}>
                                    produtos
                                </button>
                            </div>
                        </div>
                    )
                }
                
                 );
            
            }else{
                console.log('else')
                return newDados.map(({ name, description, id, value, image, typeProductos }: infor) =>{
                const productor = onStorage({name, id, quantity: 3})
                return (
                    <div key={id} className="h-[15rem] w-[10rem] my-3  mx-6  md:h-[25rem] md:w-[25rem] overflow-y-hidden bg-green-200 flex flex-col gap-1 p-4">
                        <div className="flex justify-end flex-col">
                            <h1 className="text-lg font-bold ">{name}</h1>
                            <p className="">{value}</p>
                        </div>
                        <Separator className="bg-red-500" />
                        {/*  eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-[5rem] md:h-[15rem]" src={image} alt={name}  />
                        <p>{description}</p>
                        <div >
                            <button className="bg-green-600" onClick={() => addProductor({name, id, value, description, typeProductos, session})} >
                                adicionar ao carrinho
                            </button>
                            <button className="bg-blue-500" onClick={() => removeDataQuantity({id})} >
                                remover
                            </button>
                            <button className="bg-red-500" onClick={() => getProductos({id, session})}>
                                    produtos
                                </button>
                        </div>
                    </div>
                )
            }
                );
            
            }
        }else{return <div>Error</div>}
    }catch(Error){
        console.log("Error no CompenetGrid: " + Error)
    }
        
    }
        
    




