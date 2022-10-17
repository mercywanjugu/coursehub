class Watchlist < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment,  presence: true
  validates :rating, inclusion: { in: 1..5, message: "%{value} is not between 1 and 5"}

  
end
