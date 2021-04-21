class User < ApplicationRecord
    has_many :baskets
    validates :name, uniqueness: true
end
