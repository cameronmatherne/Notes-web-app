migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pjea8fpuis1xudw")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pjea8fpuis1xudw")

  collection.name = "note"

  return dao.saveCollection(collection)
})
