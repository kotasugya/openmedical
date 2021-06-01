FactoryBot.define do
  factory :enrollment do
    user_id {1}
    company_id {1}
    employment_status {"非常勤"}
    working_now_or_not {"退職済み"}
    join_year {"2018-04-01"}
    leave_year {"2020-04-01"}
    occupation {"営業"}
  end
end
