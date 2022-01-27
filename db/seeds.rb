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
pourover = ItemCategory.create(category_name: "Pourover")
beans = ItemCategory.create(category_name: "Beans")
utensils = ItemCategory.create(category_name: "Utensils")
grinders = ItemCategory.create(category_name: "Grinders")
mugs = ItemCategory.create(category_name: "Mugs")


# Item seed data
Item.create(name: "Coffee Mug", price: 10, description: "This is a coffee mug, its for holding your coffee.  Great for keeping your coffee contained...  It's a coffee mug, what more do you want from me...", image_url: "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: mugs.id)
Item.create(name: "Blue Coffee Mug", price: 8, description: "This is a coffee mug, its for holding your coffee.  Great for keeping your coffee contained...  It's a coffee mug, what more do you want from me...", image_url: "https://images.pexels.com/photos/3334510/pexels-photo-3334510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: mugs.id)
Item.create(name: "Classic Coffee Mug ", price: 5, description: "This is a coffee mug, its for holding your coffee.  Great for keeping your coffee contained...  It's a coffee mug, what more do you want from me...", image_url: "https://images.pexels.com/photos/2642842/pexels-photo-2642842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: mugs.id)
Item.create(name: "Brown mug", price: 6, description: "Nice mug, good for keeping your coffee in one place.", image_url: "https://images.pexels.com/photos/4195322/pexels-photo-4195322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: mugs.id)
Item.create(name: "Just A Spoon", price: 33, description: "Yes, we know it's expensive.  The best spoon in the world to stir your coffee.", image_url: "https://www.pexels.com/photo/flatlay-of-a-ceramic-cap-and-purple-flower-7488219/", item_category_id: utensils.id)
Item.create(name: "Espresso Press Kit", price: 50, description: "Perfect espresso presser thing, not sure what it does exactly...", image_url: "https://www.pexels.com/photo/crop-barista-working-with-tamper-and-coffee-machine-holder-4349789/", item_category_id: utensils.id)
Item.create(name: "Bottom half Espresso press", price: 30, description: "Espresso press, bottom half only", image_url: "https://images.pexels.com/photos/4350485/pexels-photo-4350485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: utensils.id)
Item.create(name: "Manual Coffee Grinder", price: 25, description: " Old Fashioned manual coffee grinder, not that efficient but you'll save on electricity and your friends will think youre pretty cool. ", image_url: "https://images.pexels.com/photos/296285/pexels-photo-296285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: grinders.id)
Item.create(name: "Electric Coffee Grinder", price: 50, description: "It grinds your coffee pretty alright", image_url: "https://images.pexels.com/photos/5825362/pexels-photo-5825362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: grinders.id)
Item.create(name: "Conical Burr Grinder", price: 50, description: "Electric grinder that works perfectly, grinds up your coffee.", image_url: "https://images.pexels.com/photos/7487361/pexels-photo-7487361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: grinders.id)
Item.create(name: "Medium Roast Sumatran Beans", price: 14, description: "Medium Roast Sumatran beans, floral and fruity with slight bitterness and mild acidity.", image_url: "https://images.pexels.com/photos/942800/pexels-photo-942800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", item_category_id: beans.id)
Item.create(name: "Dark Roast Ethiopian Beans", price: 16, description: "Dark Roast Ethiopian beans, earthy and nutty, robust with low acidity.", image_url: "https://images.pexels.com/photos/6205583/pexels-photo-6205583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: beans.id)
Item.create(name: "Light Roast Kenyan Beans", price: 14, description: "Light Roast Kenyan, light bodied, hints of fruit and nuttiness, bold with low acidity", image_url: "https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: beans.id)
Item.create(name: "Costa Rican Dark Roast Beans", price: 18, description: "Costa Rican Dark Roast beans, floral with hints of cherry, high acidity", image_url: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: beans.id)
Item.create(name: "Medium Roast Guatemalan Beans", price: 16, description: "Dark Roast Guatemalan, a favorite at the Supply, full bodied and nutty with chocolate notes, mild acidity.", image_url: "https://images.pexels.com/photos/8516931/pexels-photo-8516931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: beans.id)
Item.create(name: "Hario Pourover kit", price: 60, description: "Pour Over kit includes filters, pourover top, and pourover bottom glass.", image_url: "https://www.pexels.com/photo/a-person-pouring-hot-water-on-a-coffee-dispenser-5328288/", item_category_id: pourover.id)
Item.create(name: "Chemex Pourover Glass", price: 35, description: "Chemex glass is perfect for pourover coffee.", image_url: "https://www.pexels.com/photo/photo-of-person-pouring-water-on-a-cup-2616175/", item_category_id: pourover.id)
Item.create(name: "Chemex Glass and Cup kit", price: 45, description: "Kit includes chemex glass and cup.", image_url: "https://images.pexels.com/photos/3749174/pexels-photo-3749174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: pourover.id)
Item.create(name: "Basic Pourover Glass", price: 20, description: "Basic pourover glass, perfect for your morning routine.", image_url: "https://images.pexels.com/photos/5589141/pexels-photo-5589141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", item_category_id: pourover.id)
Item.create(name: "Basic Pourover Combo kit", price: 30, description: "Basic pourover combo kit includes the pouring glass and cup.", image_url: "https://www.pexels.com/photo/person-pouring-red-liquid-on-clear-drinking-glass-4787613/", item_category_id: pourover.id)

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
b1= Blog.create(title: "Coffee Stuff", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 60, supplemental: true, random_sentences_to_add: 4)  )
b2= Blog.create(title: "Coffee Stuff part 2", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 60, supplemental: true, random_sentences_to_add: 4)  )
b3= Blog.create(title: "Does origin matter? A look at where coffee comes from.", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 60, supplemental: true, random_sentences_to_add: 4)  )
b4= Blog.create(title: "The essence of Coffee: a poem", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 60, supplemental: true, random_sentences_to_add: 4)  )
b5= Blog.create(title: "Hello Coffee World", user_id: u1.id, blog_text: Faker::Lorem.paragraph(sentence_count: 60, supplemental: true, random_sentences_to_add: 4)  )


Comment.create(comment_text: "this blog is fire", user_id: u1.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is trash", user_id: u2.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is sick", user_id: u1.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is great", user_id: u2.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is chill", user_id: u1.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is nice", user_id: u2.id, blog_id: b1.id)
Comment.create(comment_text: "this blog is fire", user_id: u1.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is trash", user_id: u2.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is sick", user_id: u1.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is great", user_id: u2.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is chill", user_id: u1.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is nice", user_id: u2.id, blog_id: b2.id)
Comment.create(comment_text: "this blog is fire", user_id: u1.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is trash", user_id: u2.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is sick", user_id: u1.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is great", user_id: u2.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is chill", user_id: u1.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is nice", user_id: u2.id, blog_id: b3.id)
Comment.create(comment_text: "this blog is fire", user_id: u1.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is trash", user_id: u2.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is sick", user_id: u1.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is great", user_id: u2.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is chill", user_id: u1.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is nice", user_id: u2.id, blog_id: b4.id)
Comment.create(comment_text: "this blog is fire", user_id: u1.id, blog_id: b5.id)
Comment.create(comment_text: "this blog is trash", user_id: u2.id, blog_id: b5.id)
Comment.create(comment_text: "this blog is sick", user_id: u1.id, blog_id: b5.id)
Comment.create(comment_text: "this blog is great", user_id: u2.id, blog_id: b5.id)
Comment.create(comment_text: "this blog is chill", user_id: u1.id, blog_id: b5.id)
Comment.create(comment_text: "this blog is nice", user_id: u2.id, blog_id: b5.id)

p "done seeding!"
