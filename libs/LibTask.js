
import LibStore from './LibStore';

//
export default {
    get_items :async function(){
        try {
            var items = []
            console.log('#get_items')
            var firebase= await LibStore.get_firestore()
            this.database = firebase.firestore()
            var dbRef = this.database.collection('tasks')
            dbRef = dbRef.orderBy("created_at", "desc").limit(1000)
            var querySnapshot = await dbRef.get()
            querySnapshot.forEach(function(doc) {
                var item = doc.data()
                item.id = doc.id
                item.created_at = ""
                items.push(item)            
            })
// console.log(items)
         return items
        } catch (err) {
            console.error(`Error: ${JSON.stringify(err)}`)
            throw new Error('Error , get_items');
        }          
    },
    get_show_item :async function(id){
        try {
//            var items = []
//            console.log('#get_items')
            var database= await LibStore.get_db()
            var docRef = await database.collection("tasks").doc( id )
            var doc = await docRef.get()
            var item = doc.data()
// console.log( item)            
         return item
        } catch (err) {
            console.error(`Error: ${JSON.stringify(err)}`)
            throw new Error('Error , get_show_item');
        }          
    },    
    func1 :async function(){
    },

}
