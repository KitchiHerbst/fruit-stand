# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Basket.destroy_all
User.destroy_all
Ingredient.destroy_all

jose = User.create(name: 'Jose')
donovan = User.create(name: 'Donovan')
triston = User.create(name: 'Triston')


basket1 = Basket.create(user: User.first)

ing1 = Ingredient.create(basket: Basket.first, name: 'bug')
ing1 = Ingredient.create(basket: Basket.first, name: 'bug')
ing1 = Ingredient.create(basket: Basket.first, name: 'fruit')
ing1 = Ingredient.create(basket: Basket.first, name: 'fruit')
