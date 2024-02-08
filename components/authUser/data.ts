export const dados = async () =>{
    const res = await fetch("/api/userLogin", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
          },
        
        
      })
      if(!res.ok) console.log("Error when searching for data postsElements")
      return await res.json()
}

interface person {
    email:string;
    password:string;
}
interface user {
    email:string;
    password:string;
    id:string;
}
export const inforperson = async ({ email, password }: person) =>{
    const res = await fetch("/api/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password,
            email: email,
        })
    });
      if(!res.ok) console.log("Error when searching for data postsElements")
      
      return console.log('clicou')
}