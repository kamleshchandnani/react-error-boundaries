export const getRepos = username => {
  return fetch(
    `https://api.github.com/users1/${username}/repos?sort=updated&client_id=fb5e9d733895cd450757&client_secret=759ad1a3998bdc86dce2867e63113600e5f2707f`
  )
    .then(response => response.json())
    .then(data => {
      let repos = data.map(repo => {
        return {
          id: repo.id,
          name: repo.name,
          stars: repo.stargazers_count,
          description: repo.description,
          url: repo.html_url
        };
      });
      repos = repos.sort((a, b) => b.stars - a.stars).slice(0, 5);
      return repos;
    })
    .catch(error => {
      /* Error handling */
      return {
        error
      };
    });
};
