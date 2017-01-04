json.auth_token @command.result

json.user do
  json.partial! '/api/v1/users/user', user: @command.user
end
