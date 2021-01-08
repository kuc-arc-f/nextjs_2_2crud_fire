//LibStore
import firebase from 'firebase'

//
export default {
    get_config :function(){
        return {
            apiKey: "YOUR-PROJECT",
            authDomain: "YOUR-PROJECT.firebaseapp.com",
            databaseURL: "https://YOUR-PROJECT.firebaseio.com",
            projectId: "YOUR-PROJECT",
            storageBucket: "YOUR-PROJECT.appspot.com",
            messagingSenderId: "123"
        }
    },
    get_firestore: function(){
        try {
            var config = this.get_config()
//            console.log("ap-len:", firebase.apps.length)
            if(firebase.apps.length < 1){
                firebase.initializeApp(config)
            }
            return firebase
        } catch (err) {
            console.error(`Error: ${JSON.stringify(err)}`)
            throw new Error('Error , get_firestore');
        }          
    },
    get_db: function(){
        try {
            var firebase = this.get_firestore()
            return firebase.firestore()
        } catch (err) {
            console.error(`Error: ${JSON.stringify(err)}`)
            throw new Error('Error , get_db');
        }          
    },
}
