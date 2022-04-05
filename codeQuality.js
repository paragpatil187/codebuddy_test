

//level 2
async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

//   let user = doc[0];
//   let Profile = doc[1];
//   let posts = doc[2];
let [user,Profile,posts]=doc.trim().split("")

  const userProfile = {
    user,
    Profile,
    posts,
  };

  return userProfile;
}


