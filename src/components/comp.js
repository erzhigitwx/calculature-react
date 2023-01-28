export function compilator(value) {
  value = value.replace("×", "*");
  value = value.replace("÷", "/");
  value = value.replace(",", ".");
  const result = eval(value);
  if (JSON.stringify(result).includes(".")) {
    return result.toFixed(3);
  } else {
    return result;
  }
}
