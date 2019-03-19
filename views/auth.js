window.onload = () => {

//SignIn with Google
const googleBtn = document.querySelector('#googleBtn');
googleBtn.addEventListener('click', () => {
    firebase.auth().signInWithPopup(googleProvider).then((result) => {
    let token = result.credential.accessToken;
    let user = result.user;
      
    //Storing in Firestore
    db.collection("google").add({
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    emailVerified: user.emailVerified
})

}).catch((error) => {
  let errorCode = error.code;
  let errorMessage = error.message;
  let email = error.email;
  let credential = error.credential;
});
});

//SignIn with Google
const ghBtn = document.querySelector('#ghBtn');
ghBtn.addEventListener('click', () => {
  firebase.auth().signInWithPopup(githubProvider).then((result) => {
  let token = result.credential.accessToken;
  let user = result.user;
    
  //Storing in Firestore
  db.collection("github").add({
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    emailVerified: user.emailVerified
})

}).catch((error) => {
  let errorCode = error.code;
  let errorMessage = error.message;
  let email = error.email;
  let credential = error.credential;
});

});
}