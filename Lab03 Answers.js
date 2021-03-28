use lab4
show dbs
db.student.insertOne({
    "name": "John",
    "dateofbirth": new Date(),
    "subject": ["Application Frameworks", "Computer Architecture"]
    })
    
db.student.find()

db.student.insertOne({
    "name": "Savi",
    "dateofbirth": new Date(),
    "subject": "Application Frameworks"
    })

db.student.find( {} )  

db.student.find( { name: "John" } )

db.student.find( { name: "Savi" } )

db.student.find( { _id: ObjectId("6060df513fc6244864fafb9f") } )

db.student.insertOne({
    "name": "Savidu",
    "dateofbirth": new Date(),
    "subject": ["Application Frameworks", "SEPQM", "Distributed Systems"]
    })

db.student.update(
    { "name": "John" },
    {
        $push: {
            "subject" : "Distributed Computing"
        }
    }
)

db.student.deleteOne( {name: "Smith"} )
   
db.student.insertMany([
   {
       "name": "Smith",
       "dateofbirth": "1990-01-15T00:00:00Z",
       "subjects": ["Application Framework", "Computer Architecture"],
       "isActive": true
    },
    {
       "name": "Jane",
       "dateofbirth": "1990-02-15T00:00:00Z",
       "subjects": ["Application Framework", "Computer Architecture"],
       "isActive": false
    }
   ])

db.student.find({$and:[{"name": "Smith"}, {"isActive": true}]})

db.student.findOneAndUpdate(
    {$and:[{"name": "Smith"}, {"isActive": true}]},
    {$push: {
        "subject": "Distributed Computing" 
        } 
     }
)
