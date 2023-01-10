import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'Auth/AuthController.store')
  Route.delete('/', 'Auth/AuthControlller.destroy').middleware('auth')
  Route.post('/newuser/', 'Auth/NewUserController.store')
}).prefix('/auth')
