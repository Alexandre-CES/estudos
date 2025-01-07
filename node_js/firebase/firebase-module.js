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
import { 
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID 
} from "./infos.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

// *Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const commentList = document.getElementById('comment-list');

const buttonGetUsers = document.getElementById('users');

const inputUserId = document.getElementById('user-id');
const inputStars = document.getElementById('stars');
const inputComment = document.getElementById('comment');
const buttonNewComment = document.getElementById('new-comment');

// * => functions

//update comments:
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

//return list of users 
async function getUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    } catch (err) {
        console.error('Error searching for users:', err);
    }
}

//return list of feedbacks
async function getFeeds() {
    try {
        const querySnapshot = await getDocs(collection(db, 'feedback'));
        return querySnapshot;
    } catch (err) {
        return ['Error searching for comments:', err];
    }
}

//add new comment in feedback
async function newComment(user_id, stars, comment){
    try{
        const docRef  = await addDoc(collection(db, "feedback"),{
            id_user:user_id,
            stars:stars,
            comment:comment
        });
        console.log('success adding comment: ', docRef.id);
    }catch(err){
        console.error("Error adding comment:", err);
    }
}

//* read buttons
buttonGetUsers.addEventListener("click", () => {
    getUsers();
});

//* add buttons
buttonNewComment.addEventListener("click", () => {
    try{
        const userId = inputUserId.value;
        const stars = inputStars.value;
        const comment = inputComment.value;

        if(!userId | !stars | !comment){
            console.error('invalid fields');
            throw new error('invalid fields');
        }else{
            newComment(userId,stars,comment);
        }
        updateComments();
    }catch(err){
        console.error('error creating comment: ', err)
    }
});

