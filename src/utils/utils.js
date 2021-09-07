export function getShortUserName(name) {
  if (name) {
    return name
      .split(/\s/)
      .reduce(
        (response, word) => (response += word?.slice(0, 1).toUpperCase()),
        ""
      );
  } else return "";
}

export function getErrorMessage(err) {
  if (Array.isArray(err)) return err[0];
  if (typeof err === "string" || err instanceof String) return err;
  return "Error while performing that operation";
}

export function getFormattedDate() {
  const today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return mm + "/" + dd + "/" + yyyy;
}
