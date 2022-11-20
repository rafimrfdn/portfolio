class Message {
  public static readonly ERROR_PROJECT_NAME =
    'Project name is required, 5 to 30 characters, only letters, numbers, spaces, hyphens, underscores and apostrophes';

  public static readonly ERROR_NAME =
    'Full name is required, at least 3 characters, maximum 16 characters, no special characters, no numbers, no spaces, no dashes, no underscores, no apostrophes, no commas';

  public static readonly ERROR_EMAIL =
    'Email is required, and must be a valid email address,';

  public static readonly ERROR_MESSAGE =
    'Message is required, min 140 characters and max 600 characters, special characters are allowed, ex: !@#$%^&*()_+=-{}|[]:;<>,.?/';

  public static readonly SUCCESS_CONTACT =
    'Your message has been sent, thank you!';
}

export default Message;
