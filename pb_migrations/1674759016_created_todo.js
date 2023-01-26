migrate((db) => {
  const collection = new Collection({
    "id": "xwuviysa6lk97ro",
    "created": "2023-01-26 18:50:16.960Z",
    "updated": "2023-01-26 18:50:16.960Z",
    "name": "todo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v5kfi3vk",
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
  const collection = dao.findCollectionByNameOrId("xwuviysa6lk97ro");

  return dao.deleteCollection(collection);
})
