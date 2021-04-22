class Basket < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  # has_many :bugs, through: :ingredients
  # has_many :fruits, through: :ingredients
  serialize :ingredients, :user
end
