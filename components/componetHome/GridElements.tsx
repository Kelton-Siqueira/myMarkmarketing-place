'use client'
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { DialogProducto } from "../dialog/dialogProductos";
import { useEffect, useState } from "react";

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
        seccion?:       string;
}

export default function GridElements({ dados, values }:Elements){
    try{
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
                console.log('if')
                return dados.map(({ name, description, id, value, image }: infor) => (
                    <div key={id} onClick={() => console.log(id)} className="h-20 my-3  mx-6  md:h-[25rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                        <div className="flex justify-end flex-col">
                            <h1 className="text-lg font-bold ">{name}</h1>
                            <p className="">{value}</p>
                        </div>
                        <Separator className="bg-red-500" />
                        {/*  eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-[15rem]" src={image} alt={name}  />
                        <p>{description}</p>
                        <div className="bg-red-500 h-5">
                            <button>
                                adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                ));
            
            }else{
                console.log('else')
                return newDados.map(({ name, description, id, value, image }: infor) => (
                    
                    <div key={id} onClick={() => console.log(id)} className="h-20 my-3  mx-6  md:h-[25rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                        <div className="flex justify-end flex-col">
                            <h1 className="text-lg font-bold ">{name}</h1>
                            <p className="">{value}</p>
                        </div>
                        <Separator className="bg-red-500" />
                        {/*  eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-[15rem]" src={image} alt={name}  />
                        <p>{description}</p>
                        <div className="bg-red-500 h-5 hover:cursor-pointer">
                                adicionar ao carrinho
                        </div>
                    </div>
                ));
            
            }
        }else{return <div>Error</div>}
    }catch(Error){
        console.log("Error no CompenetGrid: " + Error)
    }
        
    }
        
    




