class Course < ApplicationRecord
    belongs_to :user
    validates :title, presence: true
    validates :description, length: { minimum: 100 }
end
