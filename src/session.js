// RAD-3: upgrade session handling to rotating tokens
function rotateSession(session) {
  return { ...session, token: session.token + ".rotated", rotatedAt: Date.now() };
}
module.exports = { rotateSession };
