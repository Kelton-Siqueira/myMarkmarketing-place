import { laePostStore } from "./postStorage";

interface Productor{
    id:         string;
    name:       string;   
    quantity?:   number;
}

export default function onStorage({id, name, quantity}:Productor){
    const lt = {
        add: () => laePostStore.getState().add({id, name, quantity}),
        remove: () => {
            laePostStore.getState().delete({id, name, quantity})
        }
    }
    return lt
}