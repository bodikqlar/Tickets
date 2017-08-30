class TicketPolicy < ApplicationPolicy
  def index?
    true
  end

  def destroy?
    user.admin?
  end

  def show?
    true
  end

  def update?
    true
  end

  def create?
    true
  end

  class Scope < Scope
    def resolve
      if user.standard? && user.support_agent?
        scope.tickets
      else
        scope.all
      end
    end
  end
end
