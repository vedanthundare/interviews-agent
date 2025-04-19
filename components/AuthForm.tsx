"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '@/firebase/client'
import { signIn, signUp } from "@/lib/actions/auth.action"
import Image from "next/image"

type FormType = 'sign-in' | 'sign-up';

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const schema = authFormSchema(type);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  });

  const isSignIn = type === 'sign-in';

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      if (type === 'sign-up') {
        const { name, email, password } = values;
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result.message);
          return;
        }

        toast.success('Account created successfully. Please sign-in.');
        router.push('/sign-in');

      } else {
        const { email, password } = values;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error('Sign in failed');
          return;
        }

        await signIn({ email, idToken });
        toast.success('Sign-in successfully');
        router.push('/');
      }
    } catch (error) {
      console.error(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center caret-sidebar-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-col gap-2 items-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2>PrepWise</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
              {!isSignIn && (
                <FormField control={form.control} name="name" label="Name" placeholder="Your Name" />
              )}
              <FormField control={form.control} name="email" label="Email" placeholder="Your Email" />
              <FormField control={form.control} name="password" label="Password" placeholder="Your Password" type="password" />
              <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
            </form>
          </Form>
          <p className="text-center">
            {isSignIn ? 'No account yet' : 'Have an account already'}
            <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
              {!isSignIn ? 'Sign in' : 'Sign up'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
