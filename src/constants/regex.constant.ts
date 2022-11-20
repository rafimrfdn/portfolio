class Regex {
  // PROJECT_NAME
  public static readonly PROJECT_NAME = /^[a-zA-Z0-9\s\-\_\']{5,30}$/;

  // FULL_NAME
  public static readonly FULL_NAME =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

  // EMAIL
  public static readonly EMAIL =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // MESSAGE
  public static readonly MESSAGE =
    /[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{140,600}/;
}

export default Regex;
