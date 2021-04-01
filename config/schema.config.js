
var Validator = require('jsonschema').Validator;
var v = new Validator();

var taskSchema = {
    "id": "/SimpleTask",
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "title": {"type": "string"},
        "dateBegin": {"type": "string"},
        "dateEnd": {"type": "string"},
        "username": {"type": "string"},
        "status": {"type": "string"}
    },
    "required": ["name", "title", "dateBegin", "dateEnd", "username", "status"]
};

var userSchema = {
    "id": "/SimpleTask",
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"}
    },
    "required": ["username", "password"]
};

module.exports = {
    v,
    taskSchema,
    userSchema
};