module ResponsesHelper
  def user_response(item)
    item.attributes.except('password_digest').transform_keys do |key|
      key.camelize(:lower)
    end
  end
end
