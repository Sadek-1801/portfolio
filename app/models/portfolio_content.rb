module PortfolioContent
  FILE = Rails.root.join("data", "portfolio.yml")

  def self.data
    if Rails.env.development?
      load_file
    else
      @data ||= load_file
    end
  end

  def self.load_file
    YAML.load_file(FILE).with_indifferent_access
  end
  private_class_method :load_file
end
