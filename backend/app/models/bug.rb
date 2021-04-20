class Bug < ApplicationRecord
    has_many :ingredients
    has_many :baskets, through: :ingredients
end
