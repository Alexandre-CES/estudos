// *Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaryRbdZF52F9XjGZedkwyEHNpEp3dIGE",
    authDomain: "teste-77185.firebaseapp.com",
    projectId: "teste-77185",
    storageBucket: "teste-77185.firebasestorage.app",
    messagingSenderId: "310872162520",
    appId: "1:310872162520:web:9ab770f77496c6fd8897ad",
    measurementId: "G-8WWZD05PH2"
  };

// *Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//* => html elements

//comment list / feedback
const commentList = document.getElementById('comment-list');

//test buttons
const buttonCurrentUser = document.getElementById('current-user');

//add new comment elements
const inputStars = document.getElementById('stars');
const inputComment = document.getElementById('comment');
const buttonNewComment = document.getElementById('new-comment');

//register / login / logout
const inputDisplayName = document.getElementById('displayName');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const buttonRegister = document.getElementById('register');
const buttonLogin = document.getElementById('login');
const buttonLogout = document.getElementById('logout');

// * => functions

/*
    *load list of comments inside list
    updateComments():void
*/
async function updateComments(){
    const querySnapshot = await getFeeds();

    querySnapshot.forEach((doc) => {
        const listItem = document.createElement('li');

        const user_id = doc.data()['id_user'];
        const stars = doc.data()['stars'];
        const comment = doc.data()['comment'];

        listItem.innerHTML = `
            <strong>ID do Documento:</strong> ${doc.id} <br>
            <strong>ID do Usuário:</strong> ${user_id} <br>
            <strong>Estrelas:</strong> ${stars} <br>
            <strong>Comentário:</strong> ${comment}
        `;
        commentList.appendChild(listItem);
    });
}

updateComments();

/*
    *return list of feedbacks
    getFeeds(): Promise<{comment:string, stars:number, id_user:string}[] | {comment:string}[]>
*/
async function getFeeds() {
    try {
        const querySnapshot = await getDocs(collection(db, 'feedback'));
        return querySnapshot;
    } catch (err) {
        return [{ comment:`Error searching for comments: ${err}` }];
    }
}

/*
    * add new comment in feedback

    newComment():void
*/
async function newComment(user_id, stars, comment){
    try{
        const docRef  = await addDoc(collection(db, 'feedback'),{
            id_user:user_id,
            stars:stars,
            comment:comment
        });
        console.log('success adding comment: ', docRef.id);
    }catch(err){
        console.error('Error adding comment:', err);
    }
}

//* => button event listeners

//log current user
buttonCurrentUser.addEventListener('click', ()=>{
    const user = auth.currentUser;
    if (user) {
        
        console.log('user:', user);
        console.log('UID:', user.uid);
        console.log('E-mail:', user.email);
        console.log('name:', user.displayName);

      } else {
        console.log('No user logged.');
      }
});

// add new comment
buttonNewComment.addEventListener('click', () => {
    try{
        const userId = inputUserId.value;
        const stars = inputStars.value;
        const comment = inputComment.value;

        if(!userId || !stars || !comment){
            console.error('invalid fields');
            throw new Error('invalid fields');
        }else{
            newComment(userId,stars,comment);
        }
        updateComments();
    }catch(err){
        console.error('error creating comment: ', err)
    }
});

//register
buttonRegister.addEventListener('click', async ()=>{
    try{
        const displayName = inputDisplayName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        if(!email || !password){
            console.error('invalid fields');
            throw new Error('invalid fields');
        }else{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if(displayName){
                const user = userCredential.user;
                await updateProfile(user, {
                    displayName: displayName,
                  });
            }

            console.log('registered user:', userCredential.user);
        }
    }catch(err){
        console.error('error on register: ', err);
    }
});

//login
buttonLogin.addEventListener('click', async () => {
    try {
        const email = inputEmail.value;
        const password = inputPassword.value;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('logged user: ', userCredential.user);
    } catch (err) {
        console.error('error on login: ', err);
    }
});

//logout
buttonLogout.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('logout');
    } catch (error) {
        console.error('error on logout: ', error);
    }
});