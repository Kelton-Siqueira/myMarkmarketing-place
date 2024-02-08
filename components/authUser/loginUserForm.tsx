'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn } from "next-auth/react"



//aqui podemos fazer o possivel salvamento de elementos
const formSchema = z.object({
    email: z.string({
        required_error: 'E-mail is required'
    }).email({
        message: 'must be a valid e-mail'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(7, {message:'The password must have at least 5 characteristics'}).max(10, {message: 'Password exceeded the default limit'}),
})



type NewType = {
    SetisLogin: React.Dispatch<React.SetStateAction<boolean>>;
    isLogin: boolean
}

interface Profile {
    id: number;
    id_user: string;
    name:string;
    email:string;
}

export default function LoginForm(){
    const router = useRouter()
    const [pass, setPass] = useState(false)
    const [isdisable, setDisable] = useState(false)
    
                                
    const form = useForm<z.infer<typeof formSchema>>({
        //como zod não fala a lingua do react, utilizamos o resolver passando o zodResolver que é o tradutor e passando pra ele o schema.
        resolver: zodResolver(formSchema),
        //Os valores de inicio
        defaultValues: {
            email: '',
            password: '',
        }
    });
    let l = false

    const onSubmitls = async (values:z.infer<typeof formSchema>) => {
        try{
            
            setDisable(isdisable ? false:true)
            const {email, password} = values
            const rest = await fetch("/api/login",
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        password,
                         email,
                    })
                });
            
            if(!rest.ok){
                const res = await signIn<"credentials">("credentials", {
                    ...values,
                    redirect: false,
                  });
                  if(res?.error) throw new Error("Erro no res DO autorize LoginUser")
                  else router.push("/home")
            }else{
                
            }
                
            
        }catch(error){
            console.log('Erro no Create-Account Submit', error)
        }
    }
    return(
        <div className="flex z-40 flex-col justify-center items-center space-y-2">

            <span className="text-lg text-red-600">You wuill love it</span>
            {/* Passamos por meio de props todos os elementos de form, criamos um forme e informamos que o evento de submição será realizado pelo handleSubmit por meio do form */}
            <Form {...form}>
                <form
                
                    className="flex flex-col  space-y-2" 
                    onSubmit={form.handleSubmit(onSubmitls)}
                >
                    
                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>E-Mail</FormLabel>
                                <FormControl >
                                    <Input disabled={isdisable}
                                        placeholder="your email" type="email"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your E-mail
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isdisable}
                                        placeholder="your password" type="password"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Password
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    {pass ? <div className="text-red-500">As senhas precisão ser iguais</div>: ''}
                    
                    <Button disabled={isdisable}  className=" m-4 text-white border  active:text-white active:shadow-black active:h-8 active:bg-black" type="submit">Create Your Account</Button>
                    
                </form>
                
            </Form>
        </div>
    )
}








