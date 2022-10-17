class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :rating, :comment
  has_one :user
end
