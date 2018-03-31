export const getUser = username => {
  return fetch(
    `https://api.github.com/users/${username}?client_id=fb5e9d733895cd450757&client_secret=759ad1a3998bdc86dce2867e63113600e5f2707f`
  )
    .then(response => response.json())
    .then(data => {
      return {
        username: data.login,
        name: data.name,
        photo: data.avatar_url,
        bio: data.bio || "no description",
        url: data.html_url
      };
    })
    .catch(error => {
      return { error };
    });
};
