# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Creating users..."
matteo = User.create(email: "matteo@yahoo.com", password: "matteo123456", username: "Matteo")
mike = User.create(email: "mike@yahoo.com", password: "mike123456", username: "Mikeymike")
racheal = User.create(email: "racheal@yahoo.com", password: "racheal123456", username: "Racheal", role: 1)
jeni = User.create(email: "jeni@yahoo.com", password: "jeni123456", username: "Jenicute")

puts "🌱 Creating movies..."
movie1 = Movie.create(title: "react js", image_url: "https://www.youtube.com/watch?v=W--eIMVr350&t=22s", genre: "project", plot: "This is a Sinatra base react project", total_time: "7:46", creator_id: racheal.id)
movie2 = Movie.create(title: "ruby project", image_url: "https://youtu.be/bV9-Lnt6aEw", genre: "project", plot: "This project was bootstrapped with Create React App for the Frontend and a Json server template for the backend. This project consist of over 20 components, a RESTful API and over 5 client-side Routes using react-router and navigation links", total_time: "6:24", creator_id: racheal.id)
movie3 = Movie.create(title: "sinatra", image_url: "https://youtu.be/yjC81tnqRbE", genre: "project", plot: "This is a react app single page application project, it consist of 5 components, 3 client side routes using the react router.
I used JSON server to create a restful API for my backend and I made use of get, post, delete and patch methods request to JSON.", total_time: "3:12", creator_id: racheal.id)
movie4 = Movie.create(title: "javascript project", image_url: "https://youtu.be/JQQ6QTu76Gw", genre: "project", plot: "Its a single page website that is built with HTML, CSS, JavaScript. it retrieves data from a public API and also uses JSON as the communication format.", total_time: "2:12", creator_id: racheal.id)
movie4 = Movie.create(title: "css", image_url: "https://youtu.be/JQQ6QTu76Gw", genre: "css", plot: "Its a single page website that is built with HTML, CSS, JavaScript. it retrieves data from a public API and also uses JSON as the communication format.", total_time: "1:12", creator_id: racheal.id)


puts "🌱 Creating watchlists..."
Watchlist.create(user_id: mike.id, movie_id: movie1.id, rating: 3, comment: "this is a nice movie")
Watchlist.create(user_id: racheal.id, movie_id: movie2.id, rating: 5, comment: "Has alot of suspense")
Watchlist.create(user_id: jeni.id, movie_id: movie3.id, rating: 2, comment: "The movie didn't end well at all")
Watchlist.create(user_id: matteo.id, movie_id: movie4.id, rating: 1, comment: "I wouldn't recommend this movie to anyone")

puts "🌱 Seeding done!"