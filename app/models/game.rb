class Game < ApplicationRecord
    validates :name, :genre, :platform, :sales, presence: true
    validates :sales, numericality: { only_integer:true }
end
