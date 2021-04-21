class Ingredient < ApplicationRecord
  # belongs_to :fruit, optional: true
  # belongs_to :bug, optional: true
  belongs_to :basket
end
