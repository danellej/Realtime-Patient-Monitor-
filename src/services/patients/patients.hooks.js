const { authenticate } = require('@feathersjs/authentication').hooks;

const processPatient = require('../../hooks/process-patient');

const populatePatient = require('../../hooks/populate-patient');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processPatient()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populatePatient()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
