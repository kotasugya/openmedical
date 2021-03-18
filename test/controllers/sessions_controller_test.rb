require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get login," do
    get sessions_login,_url
    assert_response :success
  end

  test "should get logged_in," do
    get sessions_logged_in,_url
    assert_response :success
  end

  test "should get logout" do
    get sessions_logout_url
    assert_response :success
  end

end
