# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
ItemCategory.destroy_all
Item.destroy_all

p "seeding database"

# User Seed data 
User.create(username: "Admin", password: "admin12345", email_address: "admin@email.com", is_admin: true)
User.create(username: "Nick", password: "nick", email_address: "nick@email.com", is_admin: false)

# Item Category seed data
ItemCategory.create(category_name: "Pourover")
ItemCategory.create(category_name: "Beans")
ItemCategory.create(category_name: "Utensils")
ItemCategory.create(category_name: "Grinders")
ItemCategory.create(category_name: "Mugs")

# Item seed data
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Mug", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Test", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Hola", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))

p "done seeding!"
