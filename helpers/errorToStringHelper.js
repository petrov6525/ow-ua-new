

class ErrorToStringHelper
{
    constructor() {
        this.errors = {
            timeout: "Помилка з'єднання із сервером",
            403: "Невірний email або пароль",
            exists: "Помилка реєстрації. Можливо користувач з таким email вже існує"
        }
    }

    getError(error) {
        if (error.includes("timeout")) {
            return this.errors["timeout"];
        } else if (error.includes("403")) {
            return this.errors["403"]
        } else if (error.includes("400")) {
            return this.errors["exists"]
        }
    }
}

const errorToStringHelper = new ErrorToStringHelper();

export default errorToStringHelper;