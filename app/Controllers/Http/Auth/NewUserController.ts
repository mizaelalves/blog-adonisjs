import User from 'App/Models/User'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/Auth/AuthValidator'

export default class AuthController {
  public async store({ request }: HttpContextContract) {
    const data = await request.validate(AuthValidator)
    const user = await User.create(data)

    return user
  }
}
