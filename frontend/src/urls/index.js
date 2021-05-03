const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api/v1'

// ユーザー
export const usersNew = `${DEFAULT_API_LOCALHOST}/users`
export const usersShow = (id) => `${DEFAULT_API_LOCALHOST}/users/${id}`
export const usersEdit = (id) => `${DEFAULT_API_LOCALHOST}/users/${id}`

// ログインログアウト系
export const login = `${DEFAULT_API_LOCALHOST}/login`
export const usersCheckLogin = `${DEFAULT_API_LOCALHOST}/logged_in`
export const logout = `${DEFAULT_API_LOCALHOST}/logout`

// 企業
export const companiesNew = `${DEFAULT_API_LOCALHOST}/companies`
export const companiesShow = (companyId) =>
  `${DEFAULT_API_LOCALHOST}/companies/${companyId}`
export const companiesIndex = `${DEFAULT_API_LOCALHOST}/companies`
// 企業検索
export const search = (keyword) =>
  `${DEFAULT_API_LOCALHOST}/companies/search?search=${keyword}`

// レビュー
export const reviewsNew = `${DEFAULT_API_LOCALHOST}/company/reviews`
export const reviewsShow = (companyId, reviewCategoryId, reviewId) =>
  `${DEFAULT_API_LOCALHOST}/companies/${companyId}/review_categories/${reviewCategoryId}/reviews/${reviewId}`
export const reviewsIndex = (companyId, reviewCategoryId) =>
  `${DEFAULT_API_LOCALHOST}/companies/${companyId}/review_categories/${reviewCategoryId}/reviews`

// レビューカテゴリー
export const reviewCategoriesIndex = (companyId) =>
  `${DEFAULT_API_LOCALHOST}/companies/${companyId}/review_categories`
export const reviewCategoriesShow = (companyId, reviewCategoryId) =>
  `${DEFAULT_API_LOCALHOST}/companies/${companyId}/review_categories/${reviewCategoryId}`

// 在籍情報
export const enrollmentsNew = `${DEFAULT_API_LOCALHOST}/enrollments`
