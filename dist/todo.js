"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertInput = void 0;
// TODO: Convert Input to the Output structure. Do this in an efficient and generic way.
// HINT: Make use of the helper library "lodash"
const convertInput = (input) => {
    const documents = input.documents.map((document) => {
        // TODO: map the entities to the new structure and sort them based on the property "name"
        // Make sure the nested children are also mapped and sorted
        const entities = document.entities.map(convertEntity).sort(sortEntities);
        // TODO: map the annotations to the new structure and sort them based on the property "index"
        // Make sure the nested children are also mapped and sorted
        const annotations = document.annotations.map(convertAnnotation).sort(sortAnnotations);
        return { id: document.id, entities, annotations };
    });
    return { documents };
};
exports.convertInput = convertInput;
// HINT: you probably need to pass extra argument(s) to this function to make it performant.
const convertEntity = (entity) => {
    throw new Error('Not implemented');
};
// HINT: you probably need to pass extra argument(s) to this function to make it performant.
const convertAnnotation = (annotation) => {
    throw new Error('Not implemented');
};
const sortEntities = (entityA, entityB) => {
    throw new Error('Not implemented');
};
const sortAnnotations = (annotationA, annotationB) => {
    throw new Error('Not implemented');
};
// BONUS: Create validation function that validates the result of "convertInput". Use yup as library to validate your result.
