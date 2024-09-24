/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet-async"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const SignUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp(){
  const navigate = useNavigate()

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm){
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Establishment successfully registered!', {
        action: {
          label: "Login",
          onClick: () => navigate('/sign-in'),
        },
      });
    } catch {
      toast.error('Failed to log in. Please check your credentials.')
    }
  }

  return (
    <>
      <Helmet title="Sign-Up" />
      <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">
            Login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta de administrador.
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um colaborador, crie uma conta e administre seu restaurante de onde estiver!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">

            <div className="space-y-2 w-full">
              <label htmlFor="restaurantName" className="flex flex-col items-center"> Informe o nome do seu negocio ?
              </label>
              <input 
                id="restaurantName" 
                type="text" 
                className="flex w-full h-9" 
                placeholder="Stablish name"
                {...register('restaurantName')}
              />
            </div>

            {/* ------------------------------------------------ */}

            <div className="space-y-2 w-full">
              <label htmlFor="managerName" className="flex flex-col items-center"> Como gostaria de ser chamado(a) ? </label>
              <input 
                id="managerName" 
                type="text" 
                className="flex w-full h-9" 
                placeholder="Manager Name"
                {...register('managerName')}                 
              />
            </div>

            {/* ------------------------------------------------ */}

            <div className="space-y-2 w-full">
              <label htmlFor="email" className="flex flex-col items-center"> Email </label>
              <input 
                id="email" 
                type="email" 
                className="flex w-full h-9" 
                placeholder="Email"
                {...register('email')}
              />
            </div>

            {/* ------------------------------------------------ */}

            <div className="space-y-2 w-full">
              <label htmlFor="phone" className="flex flex-col items-center"> Numero de celular </label>
              <input 
                id="phone" 
                type="tel" 
                className="flex w-full h-9" 
                placeholder=" Phone number"
                {...register('phone')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              ENVIAR
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ja e um cliente ? Efetue Login em <Link to="/sign-in">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}