// RAD-1: stop the login redirect loop
function loginRedirect(user) {
  if (!user) return "/login";
  return user.home || "/dashboard";
}
module.exports = { loginRedirect };
