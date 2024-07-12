import { LoginFormSchema } from "../definitions/auth-definitons";

export async function login(prevState:any ,formData:FormData): Promise<{ message: string }> {
    const validationResult = LoginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })
    console.log(validationResult)
    return { message: "Form submitted" }; // or some relevant message

}