class Movie < ApplicationRecord
    has_many :watchlists,  dependent: :destroy
    has_many :users, through: :watchlists
    belongs_to :creator, class_name: "User"

    validates :title, :image_url, :genre, :total_time, presence: true
    validates :plot, length: { maximum: 500 }

    def comments
        self.watchlists.map{|w| {rating: w.rating, comment: w.comment}}
    end

    def self.search_by_comment(search_for)
       self.all.filter do |movie| 
        movie.watchlists.find {|w| w.comment.include?(search_for)}
       end 
    end
    
end
 