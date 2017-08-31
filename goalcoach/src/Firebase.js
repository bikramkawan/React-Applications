/**
 * Created by bikramkawan on 8/31/17.
 */
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyD-VdbqHBpUBqeRFyIbkmmwIHAwhutQ5D4",
    authDomain: "goalcoach-72a38.firebaseapp.com",
    databaseURL: "https://goalcoach-72a38.firebaseio.com",
    projectId: "goalcoach-72a38",
    storageBucket: "",
    messagingSenderId: "450097108688"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goal');
export const completeGoalRef = firebase.database().ref('completeGoals')