if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_open_medical', domain: 'フロントエンドのドメイン'
else
    Rails.application.config.session_store :cookie_store, key: '_open_medical'
end