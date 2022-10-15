class User < ApplicationRecord
    has_many :courses
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
