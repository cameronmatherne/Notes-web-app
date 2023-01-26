migrate((db) => {
  const collection = new Collection({
    "id": "zfiqxa7v7ilfp8o",
    "created": "2023-01-26 19:28:06.109Z",
    "updated": "2023-01-26 19:28:06.109Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ysuqpfxm",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zfiqxa7v7ilfp8o");

  return dao.deleteCollection(collection);
})
