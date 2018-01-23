function testDestructuring([, arrayIndex,], {name: objectName} = {name: 'toto'}, ...restLength) {
    // Vous ne devez rien changer ici, juste utiliser les mêmes noms de variable
    return arrayIndex + objectName + restLength.length;
}

// spread operator
function updateUserInformation(userList, userId, newInformation) {
  return {
    // renvoyer directement la nouvelle userList avec l'utilisateur mis à jour
  };
}

module.exports = {testDestructuring, updateUserInformation};
