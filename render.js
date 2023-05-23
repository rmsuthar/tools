function render(json, options) {
    const data = {};
  
    for (const property in json) {
      data[property] = {
        field: property,
        type: typeof json[property],
        values: json[property]
      };
    }
  
    return data;
  }
  
  export default render;
  