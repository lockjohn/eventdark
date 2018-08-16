class Category < ApplicationRecord
  has_many :categorizations
  has_many :events, through: :categorizations
end
