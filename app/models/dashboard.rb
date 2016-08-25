# == Schema Information
#
# Table name: dashboards
#
#  id                 :integer          not null, primary key
#  title              :string
#  slug               :string
#  summary            :text
#  content            :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  published          :boolean          default(FALSE)
#  partner_id         :integer
#  indicator_id       :integer
#  related_datasets   :text             default([]), is an Array
#

class Dashboard < ApplicationRecord

  has_attached_file :image

  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]

  belongs_to :partner
  belongs_to :indicator

  accepts_nested_attributes_for :indicator

  has_and_belongs_to_many(:dashboards,
    :join_table => "dashboards_connections",
    :foreign_key => "dashboard_source_id",
    :association_foreign_key => "dashboard_target_id")

  has_and_belongs_to_many :insights
  accepts_nested_attributes_for :insights

  has_and_belongs_to_many :tools
  accepts_nested_attributes_for :tools

  before_save :sanitize_related_datasets

  def self.excluding_self(dashboard=nil)
    dashboards = Dashboard.all
    dashboards = dashboards.where.not(id: dashboard.id) if dashboard
    dashboards = dashboards.pluck(:title, :id)
  end

  def sanitize_related_datasets
    self.related_datasets = self.related_datasets.reject(&:blank?)
  end

end
