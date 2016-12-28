require_all __dir__

module TestHelpers
  include JsonTestHelpers
  include ResponsesHelper

  def stub_current_user(user)
    allow(AuthorizeApiRequest).to receive_message_chain(:call, :result).and_return(user)
  end
end
