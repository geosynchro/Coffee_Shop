# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'faker'


User.destroy_all
ItemCategory.destroy_all
Item.destroy_all
Review.destroy_all
Blog.destroy_all
Comment.destroy_all

p "seeding database"

# User Seed data 
u1 = User.create(username: "Admin", password: "admin12345", email_address: "admin@email.com", is_admin: true)
u2 = User.create(username: "Nick", password: "nick", email_address: "nick@email.com", is_admin: false)

# Item Category seed data
ItemCategory.create(category_name: "Pourover")
ItemCategory.create(category_name: "Beans")
ItemCategory.create(category_name: "Utensils")
ItemCategory.create(category_name: "Grinders")
ItemCategory.create(category_name: "Mugs")


# Item seed data
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Mug", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Nonono", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Beans", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Pour Over", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Test", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Spoon", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Hola", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Thing", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))
Item.create(name: "Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/1442880/pexels-photo-1442880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: rand(1..5))

# Reviews Seed data
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")
Review.create(item_id: Item.ids.sample, user_id: User.ids.sample, rating: rand(1..5), review_text: "IDK What I'm doing someone help me please! I'm trapped in the computer and I can't get out!")

# Blog Seed Data
Blog.create(title: "Coffee Stuff", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 40, supplemental: true, random_sentences_to_add: 4)  )
Blog.create(title: "Coffee Stuff part 2", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 40, supplemental: true, random_sentences_to_add: 4)  )
Blog.create(title: "YO THIS IS MY BLOG TITLE", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 40, supplemental: true, random_sentences_to_add: 4)  )
Blog.create(title: "The essence of Coffee: a poem", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 40, supplemental: true, random_sentences_to_add: 4)  )
Blog.create(title: "Hello Coffee World", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 40, supplemental: true, random_sentences_to_add: 4)  )


Comment.create(comment_text: "this blog is fire", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is trash", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is sick", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is great", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is chill", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is nice", user_id:rand(1..2), blog_id:rand(1..5))
Comment.create(comment_text: "this blog is dope", user_id:rand(1..2), blog_id:rand(1..5))
p "done seeding!"
