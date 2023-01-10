import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  //public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        email: 'fulanoadmin@fulano.com',
        password: 'fulanoadmin',
        name: 'fulano',
        role: 'admin',
      },
      {
        email: 'fulano@fulano.com',
        password: 'fulano',
        name: 'fulano alves',
        role: 'normal',
      },
    ])
  }
}
