class TicketsPDF < Prawn::Document
  def initialize(tickets)
    @tickets = tickets
    super(top_margin: 70)
    header
    content
    footer
  end

  def header
    text "Tickets closed in #{month}", size: 30, style: :bold
  end

  def content
    if tickets.present?
      move_down 20
      table ticket_rows do
        row(0).font_style = :bold
        columns(1..4).align = :right
        self.header = true
      end
    end
  end

  def ticket_rows
    [["Name", "Author", "Created At", "Assignee"]] +
    tickets.map do |ticket|
      [
        ticket.title,
        ticket.owner.email,
        ticket.created_at.strftime('%D'),
        ticket.assignee.email
      ]
    end
  end

  def footer
    move_down 20
    footer_text = if tickets.present?
      "#{tickets.count} ticket(s) were closed in #{month}"
    else
      "No tickets were closed last month"
    end
    text footer_text, size: 16, style: :bold
  end

  private

  attr_reader :tickets

  def month
    "#{Date::MONTHNAMES[Date.current.prev_month.month]}, #{Date.current.prev_month.year}"
  end
end
