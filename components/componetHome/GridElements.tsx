'use client'
import { Separator } from "@radix-ui/react-separator";

 export interface Elements{
    dados: Array<infor>;
}
export interface infor {
        name:           string;
        id:             string;
        value:          string;
        description:    string;
}

export default function GridElements({ dados }:Elements){

    try{
       
        if(dados[0].description || dados[0].name){
            
                return dados.map(({ name, description, id, value }: infor) => (

                    <div key={id} className="h-20 w-60 m-3 md:h-[23rem] md:w-[25rem] overflow-y-auto bg-green-200 flex flex-col gap-1 p-4">
                        <div className="flex justify-between">
                            <div className="w-10 h-10 bg-red-500 flex z-40">{name}</div>
                        </div>
                        <h1 className="text-2xl p-5">{value}</h1>
                        <Separator className="bg-red-500" />
                        <div className="w-full h-full grow break-words overflow-auto">{description}</div>
                    </div>
                ));
            
        }else{return <div>Error</div>}
    }catch(Error){
        console.log("Error no CompenetGrid: " + Error)
    }
        
    }
        
    




