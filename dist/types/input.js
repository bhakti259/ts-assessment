"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityClass = exports.EntityType = void 0;
var EntityType;
(function (EntityType) {
    EntityType["REGULAR"] = "REGULAR";
    EntityType["NUMBER"] = "NUMBER";
    EntityType["DATE"] = "DATE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var EntityClass;
(function (EntityClass) {
    EntityClass["TEXT"] = "TEXT";
    EntityClass["IMAGE"] = "IMAGE";
    EntityClass["COMPOSITE"] = "COMPOSITE";
    EntityClass["PARAGRAPH"] = "PARAGRAPH";
    EntityClass["REGEX"] = "REGEX";
    EntityClass["CHECKBOX"] = "CHECKBOX";
    EntityClass["RELATION"] = "RELATION";
})(EntityClass = exports.EntityClass || (exports.EntityClass = {}));
