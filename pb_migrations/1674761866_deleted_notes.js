migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ubtotqmrdyntrtp");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ubtotqmrdyntrtp",
    "created": "2023-01-26 19:36:52.355Z",
    "updated": "2023-01-26 19:36:52.355Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vxpdbxzg",
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
