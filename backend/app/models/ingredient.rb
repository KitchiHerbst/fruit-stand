class Ingredient < ApplicationRecord
  belongs_to :fruit
  belongs_to :bug
  belongs_to :basket
end
