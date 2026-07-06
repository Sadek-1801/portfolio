require "test_helper"

class PortfolioContentTest < ActiveSupport::TestCase
  test "loads profile with required keys" do
    profile = PortfolioContent.data[:profile]
    %i[name title tagline bio location email whatsapp github linkedin resume_path].each do |key|
      assert profile[key].present?, "profile.#{key} missing"
    end
  end

  test "has non-empty experience, projects, skills" do
    %i[experience projects skills].each do |key|
      assert PortfolioContent.data[key].is_a?(Array), "#{key} not an array"
      assert PortfolioContent.data[key].any?, "#{key} empty"
    end
  end

  test "every project has name, description and tech" do
    PortfolioContent.data[:projects].each do |p|
      assert p[:name].present? && p[:description].present? && p[:tech].is_a?(Array),
             "bad project entry: #{p.inspect}"
    end
  end
end
