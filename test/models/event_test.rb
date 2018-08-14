# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  organizer_id :integer          not null
#  date         :datetime         not null
#  time         :datetime         not null
#  location_id  :integer          not null
#  description  :text             not null
#  price        :float            not null
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
