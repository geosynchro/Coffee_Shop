# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

p "seeding database"

# User Seed data 
User.create(username: "Admin", password: "admin12345", email_address: "admin@email.com", is_admin: true)

# Item Category seed data
ItemCategory.create(category_name: "coffee stuff")

# Item seed data
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: 1)

p "done seeding!"
