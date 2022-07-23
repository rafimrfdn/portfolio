import ConstantRegex from '@/constants/regex.constant'

class Contact {
  public static validateProjectName(str: string): boolean {
    const regex = ConstantRegex.PROJECT_NAME
    return regex.test(str)
  }

  public static validateFullName(str: string): boolean {
    const regex = ConstantRegex.FULL_NAME
    return regex.test(str)
  }

  public static validateEmail(str: string): boolean {
    const regex = ConstantRegex.EMAIL
    return regex.test(str)
  }

  public static validateMessage(str: string): boolean {
    const regex = ConstantRegex.MESSAGE

    console.log({ isVadid: `${regex.test(str)}` })

    return regex.test(str)
  }
}

export default Contact
