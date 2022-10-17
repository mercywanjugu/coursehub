class User < ApplicationRecord
    enum role: [:guest, :admin]
    #or enum role: %i(volunteer admin)
    has_many :watchlists,  dependent: :destroy
    has_many :watched_movies, through: :watchlists, source: :movie 
    has_many :created_movies, class_name: "Movie", foreign_key: :creator_id

     # password security
     has_secure_password

     validates :username, presence: true, uniqueness: true, length: {in: 6..25}
     validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
     validates :password, length: {in: 8..25}

   #   def sort_movie
   #    self.created_movies.order(title: 'asc')
   #   end
end
