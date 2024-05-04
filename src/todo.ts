import _ from 'lodash';
import { Annotation, Entity, Input } from './types/input';
import { ConvertedAnnotation, ConvertedEntity, Output } from './types/output';

// TODO: Convert Input to the Output structure. Do this in an efficient and generic way.
// HINT: Make use of the helper library "lodash"
export const convertInput = (input: Input): Output => {
  const documents = input.documents.map((document) => {
    // TODO: map the entities to the new structure and sort them based on the property "name"
    // Make sure the nested children are also mapped and sorted
    //const entities = document.entities.map(convertEntity).sort(sortEntities);
    const entities = document.entities.map(convertEntity).slice().sort((entityA, entityB) => {
      return entityA.name.localeCompare(entityB.name);
    });

    console.log("enitties----", JSON.stringify(entities));

    // TODO: map the annotations to the new structure and sort them based on the property "index"
    // Make sure the nested children are also mapped and sorted
    const annotations = document.annotations
      .filter(annotation => {
        // Your filtering criteria here
        // For example, let's filter annotations where the value property is 'someValue'
        return annotation.refs && annotation.refs.length === 0;
      }).map(convertAnnotation)
      .sort(sortAnnotations);
    return { id: document.id, entities, annotations };
  });

  return { documents };
};

// HINT: you probably need to pass extra argument(s) to this function to make it performant.
const convertEntity = (entity: Entity): ConvertedEntity => {

  const convertedEntity: ConvertedEntity = {
    id: entity.id,
    name: entity.name,
    children: [],
    type: entity.type,
    class: entity.class 
  }
  return convertedEntity;
   
  //throw new Error('Not implemented');
};

// HINT: you probably need to pass extra argument(s) to this function to make it performant.
const convertAnnotation = (annotation: Annotation, index: number ): ConvertedAnnotation => {
  const convertedAnnotation: ConvertedAnnotation = {
    id: annotation.id,
    entity: { 
      id: annotation.entityId,
      name: ''
    },
    value: annotation.value,
    index: index,
    children: []
  }
  return convertedAnnotation;

 // throw new Error('Not implemented');
};

const sortEntities = (entityA: ConvertedEntity, entityB: ConvertedEntity) => {
  if (entityA.name < entityB.name) {
    return -1;
  } else if (entityA.name > entityB.name) {
    return 1;
  } else {
    return 0;
  }
  //throw new Error('Not implemented');
};

const sortAnnotations = (annotationA: ConvertedAnnotation, annotationB: ConvertedAnnotation) => {
  if (annotationA.index < annotationB.index) {
    return -1;
  } else if (annotationA.index > annotationB.index) {
    return 1;
  } else {
    return 0;
  }

  throw new Error('Not implemented');
};


// BONUS: Create validation function that validates the result of "convertInput". Use yup as library to validate your result.