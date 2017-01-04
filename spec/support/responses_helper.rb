module ResponsesHelper
  def user_response(item)
    basic_tranformation(item).except('passwordDigest')
  end

  def ticket_status_response(item)
    basic_tranformation(item)
  end

  def ticket_response(item)
    basic_tranformation(item).except('ownerId', 'assigneeId', 'ticketStatusId').merge(
      {
        'assignee' => user_response(item.assignee),
        'owner' => user_response(item.owner),
        'ticketStatus' => ticket_status_response(item.ticket_status)
      }
    )
  end

  private

  def basic_tranformation(item)
    item.attributes.transform_keys do |key|
      key.camelize(:lower)
    end
  end
end
