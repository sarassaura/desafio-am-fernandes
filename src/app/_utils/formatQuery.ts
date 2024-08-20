function formatQuery(input: string) {
  return input.toLowerCase().replace(/\s+/g, "-");
}

export default formatQuery;
