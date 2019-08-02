
module.exports = {
  normalizeErrors: function(errors) {
    let normalizeErrors = [];

    /* iterate  error over a JavaScript object? */
    for (let property in errors) {
      if (errors.hasOwnProperty(property)) {
        normalizeErrors.push({title: property, detail: errors[property].message});
      }
    }

    return normalizeErrors;
  }
}
