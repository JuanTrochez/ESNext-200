const { testDestructuring, updateUserInformation } = require('./exo.js');

describe('Test exercise for bases', function() {
  const userList = {
    234: {
      id: 234,
      name: 'Paul',
      city: 'London'
    },
    235: {
      id: 235,
      name: 'Pierre',
      city: 'Paris'
    },
    236: {
      id: 236,
      name: 'Jack',
      city: 'Lyon'
    }
  };

  it('Test testDestructuring() 1', () => {
    expect(testDestructuring([1, 2, 3], { name: 'plop' }, 1, 2, 'plop', 'test')).toBe('2plop4');
  });

  it('Test testDestructuring() 2', () => {
    expect(testDestructuring([1, 2, 3], { name: 'foo' }, 1, 2, 'plop')).toBe('2foo3');
  });

  it('Test testDestructuring() 3', () => {
    expect(testDestructuring([1, 2, 3], undefined, 1, 2, 'plop')).toBe('2toto3');
  });

  it('Test updateUserInformation() 1', () => {
    expect(updateUserInformation(userList, 236, { name: 'John' })).toEqual({
      234: {
        id: 234,
        name: 'Paul',
        city: 'London'
      },
      235: {
        id: 235,
        name: 'Pierre',
        city: 'Paris'
      },
      236: {
        id: 236,
        name: 'John',
        city: 'Lyon'
      }
    });
  });

  it('Test updateUserInformation() 2', () => {
    expect(updateUserInformation(userList, 234, { name: 'John', city: 'Paris' })).toEqual({
      234: {
        id: 234,
        name: 'John',
        city: 'Paris'
      },
      235: {
        id: 235,
        name: 'Pierre',
        city: 'Paris'
      },
      236: {
        id: 236,
        name: 'Jack',
        city: 'Lyon'
      }
    });
  });

});
