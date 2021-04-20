# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Basket.destroy_all
User.destroy_all
Fruit.destroy_all
Bug.destroy_all
Ingredient.destroy_all

jose = User.create(name: 'Jose')
donovan = User.create(name: 'Donovan')
triston = User.create(name: 'Triston')

banana = Fruit.create(name: 'Banana')
papaya = Fruit.create(name: 'Papaya')
pear = Fruit.create(name: 'Pear')

roach = Bug.create(name: 'Lil Roach')

basket1 = Basket.create(user: User.first)

ing1 = Ingredient.create(basket: Basket.first, fruit: Fruit.first)
ing2 = Ingredient.create(basket: Basket.first, fruit: Fruit.second)
ing3 = Ingredient.create(basket: Basket.first, fruit: Fruit.third)
ing4 = Ingredient.create(basket: Basket.first, bug: Bug.first)