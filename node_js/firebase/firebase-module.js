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
    updateProfile,
    onAuthStateChanged 
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
const divComments = document.getElementById('comments');

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

    const user = auth.currentUser;

    if(user){
        const feedbacks = await getFeeds();

        divComments.innerHTML = '';

        const commentList = document.createElement('ul');

        feedbacks.forEach((feedback) => {
            const listItem = document.createElement('li');

            const displayName = feedback.displayName;
            const stars = feedback.stars;
            const comment = feedback.comment;

            listItem.innerHTML = `
                <strong>User:</strong> ${displayName}<br>
                <strong>Stars:</strong> ${stars} <br>
                <strong>Comments:</strong> ${comment}
            `;
            commentList.appendChild(listItem);
        });

        divComments.appendChild(commentList);
    }
}

/*
    *return list of feedbacks
    getFeeds(): Promise<{comment:string, stars:number, id_user:string}[] | {comment:string}[]>
*/
async function getFeeds() {
    try {
        const querySnapshot = await getDocs(collection(db, 'feedback'));
        const feedbackList = [];
        querySnapshot.forEach((doc) => {
            feedbackList.push({ id: doc.id, ...doc.data() });
        });
        return feedbackList;
    } catch (err) {
        console.error(`Error searching for comments: ${err}`);
        return [];
    }
}

/*
    * add new comment in feedback

    newComment():void
*/
async function newComment(user_id, stars, comment){
    try{
        const displayName = auth.currentUser.displayName || auth.currentUser.email;

        const docRef  = await addDoc(collection(db, 'feedback'),{
            id_user:user_id,
            displayName: displayName,
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
        const user = auth.currentUser;

        if(!user){
            console.error('Must be logged');
            throw new Error('Must be logged');
        }

        const userId = user.uid;
        const stars = inputStars.value;
        const comment = inputComment.value;

        if(!stars || !comment){
            console.error('invalid fields');
            throw new Error('invalid fields');
        }else{
            inputStars.value = '';
            inputComment.value = '';
            newComment(userId,stars,comment);
        }
        updateComments();
    }catch(err){
        console.error('error creating comment: ', err);
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

            inputDisplayName.value = '';
            inputEmail.value = '';
            inputPassword.value = '';

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
        await signInWithEmailAndPassword(auth, email, password);
        inputEmail.value = '';
        inputPassword.value = '';
    } catch (err) {
        console.error('error on login: ', err);
    }
});

//logout
buttonLogout.addEventListener('click', async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('error on logout: ', error);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is logged in:', user);
        updateComments();
    } else {
        console.log('No user is logged in.');
        divComments.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = 'log in to access comments';
        divComments.appendChild(p);
    }
});