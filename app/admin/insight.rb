ActiveAdmin.register Insight do

  permit_params :title, :slug, :summary, :content, :content_url, :partner_id, :published

  form do |f|
    f.semantic_errors
    f.inputs 'Insight Detail' do
      f.input :title, required: true
      f.input :slug, required: true
      f.input :summary
      f.input :content
      f.input :content_url
      f.input :partner
      f.input :published, as: :boolean
    end
    f.actions
  end

end
