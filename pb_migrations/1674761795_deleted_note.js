migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rc3o71i6znsxo35");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rc3o71i6znsxo35",
    "created": "2023-01-26 19:34:35.168Z",
    "updated": "2023-01-26 19:34:35.168Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xfognt1w",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
