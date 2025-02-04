/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet-async"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { toast } from "sonner"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



const SignInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof SignInForm>

export function SignIn(){
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm){
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('An authentication link was sent to your email, please check it.', {
        action: {
          label: "Resend",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error('Failed to log in. Please check your credentials.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Portal
            </h1>
            <p className="text-sm text-muted-foreground">
              Login meramente por segurança, devera ser excluído na entrega do produto</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2 w-full">
              <label htmlFor="email" className="flex flex-col items-center"> Login ID </label>
              <input id="email" type="email" className="flex w-full h-9" placeholder="Email"{...register('email')}/>
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar Portal
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}