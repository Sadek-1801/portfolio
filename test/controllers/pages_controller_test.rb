require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "home page renders with all sections" do
    get root_url
    assert_response :success
    assert_includes response.body, "M. Ashrafujjaman"
    %w[about projects experience skills contact].each do |section|
      assert_select "section##{section}, footer##{section}", true, "missing ##{section}"
    end
    assert_select "a[href=?]", "/resume.pdf"
  end
end
