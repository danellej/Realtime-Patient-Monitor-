// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, method, result, params } = context;

    //Ensure contacts is an array. If it's a single contact, wrap it into an array
    const patients = method === "find" ? result.data : [result];

    //Fetch user object from each patient's createdBy
    await Promise.all(
      patients.map(async patient => {
        patient.user = await app
          .service("users")
          .get(patient.createdBy, params);
      })
    );

    return context;
  };
};
