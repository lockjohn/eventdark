# == Schema Information
#
# Table name: registrations
#
#  id         :bigint(8)        not null, primary key
#  event_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Registration < ApplicationRecord


    belongs_to :user, class_name: :User, foreign_key: "user_id"
    belongs_to :event, class_name: :Event, foreign_key: "event_id"
end
