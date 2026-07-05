class PagesController < ApplicationController
  def home
    @portfolio = PortfolioContent.data
  end
end
