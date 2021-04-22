class User < ApplicationRecord
    has_many :baskets
    validates :name, uniqueness: true
    serialize :baskets

    # def highscore
    #     self.baskets.map(|basket| basket.score).max
    # end
end
