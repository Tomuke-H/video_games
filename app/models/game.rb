class Game < ApplicationRecord
    validates :name, :genre, :platform, presence: true
end
