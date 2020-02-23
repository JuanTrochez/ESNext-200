function testDestructuring([, arrayIndex,], {name: objectName} = {name: 'toto'}, ...restLength) {
    // Vous ne devez rien changer ici, juste utiliser les mêmes noms de variable
    return arrayIndex + objectName + restLength.length;
}

// spread operator
function updateUserInformation(userList, userId, newInformation) {
  return {
    ...userList,
    [userId]: {
      ...userList[userId],
      ...newInformation
    }
  };
}

module.exports = {testDestructuring, updateUserInformation};
