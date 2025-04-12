"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type ==='sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}


const AuthForm = ({type}:{ type: FormType}) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:""
    },
  })
 

  function onSubmit(values: z.infer<typeof formSchema>) {
   
    try{ 
      if (type === 'sign-up'){
        toast.success('Account created successfully. Please sign-in.');
        router.push('/sign-in')
      }else{
        toast.success('sign-in successfully');
        router.push('/')
      }

    } catch(error){
      console.log(error);
        toast.error(`there was an error: ${error}`)
    }
     
  }

  const isSignIn = type ==='sign-in';


  return (
    <div className="flex flex-col justify-center items-center caret-sidebar-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-col gap-2 items-center">
                <img src="/logo.svg" alt="logo" height={32} width={38} />
                <h2>PrepWise</h2>
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
        {!isSignIn && (<FormField control={form.control} name="name" label="Name" placeholder="Your Name" />)}
        <FormField control={form.control} name="email" label="Email" placeholder="Your Email" />
        <FormField control={form.control} name="password" label="Password" placeholder="Your Password" />

        <Button className="btn" type="submit" >{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        <p className="text-center">
            {isSignIn ? 'No account yet' : 'Have an account already' }
            <Link href={!isSignIn ? '/sign-in': './sign-up'} className="font-bold text-user-primary ml-1">
             {!isSignIn ? 'Sign in' : ' Sign up'}
            </Link>

        </p>
            </div>
        </div>
         
    </div>
  )
}

export default AuthForm