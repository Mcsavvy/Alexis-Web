const API_URL = import.meta.env.VITE_API_URL;

export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

export function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function clearCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/**
 *
 * @param {KindeUser} user
 */
export async function getAccessToken(user) {
  var token = getCookie("access_token");
  if (token) return token;
  console.log("user", user);
  const response = await fetch(`${API_URL}/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: user.given_name,
      last_name: user.family_name,
      email: user.email,
      picture: user.picture,
      kinde_user: user.id,
    }),
  });
  token = (await response.json()).token;
  return token;
}
