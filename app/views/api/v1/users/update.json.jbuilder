json.data do
  json.partial! '/api/v1/users/user', user: @user
end
json.message I18n.t('controllers.user.updated')

