import { createUserService } from "~/server/services/userService"

interface CreateUserRequestBody {
    name: string
    password: string
    email: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateUserRequestBody>(event)
    const { name, password, email } = body
    const result = await createUserService(name, password, email)
    return result
})
