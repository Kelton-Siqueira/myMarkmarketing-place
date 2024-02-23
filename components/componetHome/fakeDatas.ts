import {  infor } from "./GridElements";

   export const fakedados:Array<infor> = []
   for(let i = 0; i<=100; i++){
        fakedados.push({
            id: `${i}`,
            value: "sdsdsdsd",
            typeProductos: 'tecnologia',
            name: `sunt aut facere repellat id ${i}`,
            description: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et ',
            image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/inspiron-5330-categorypage-rf-800x620.png?fmt=png-alpha&wid=800&hei=620'
    })
   }