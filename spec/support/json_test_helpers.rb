module JsonTestHelpers
  def json_response
    JSON.parse(response.body)
  end

  def json_data(item)
    JSON.parse(item.to_json)
  end
end
