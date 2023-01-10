import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { StoreValidator, UpdateValidator } from 'App/Validators/Post'
//import Database from '@ioc:Adonis/Lucid/Database'

export default class PostsController {
  public async index({ }: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await auth.authenticate()

    const post = await Post.create({ authorId: user.id, ...data })

    await post.load('author')

    return post
  }

  public async show({ params }: HttpContextContract) {
    //const post = Database.rawQuery(`select * from posts where id = ${params.id}`)
    const post = await Post.findOrFail(params.id)

    /*
    if (!post) {
      return response.notFound({ error: { message: 'not found' } })
    }
    */
    await post.load('author')
    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    post.merge(data)
    await post.load('author')

    await post.save()

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
  }
}
