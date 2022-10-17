class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :role
  has_many :watched_movies
  has_many :created_movies
end
