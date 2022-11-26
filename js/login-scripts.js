function askAboutRegistration()
{
    let YES = "Да";
    let COOL = "Круто!";
    let CANCELLED = "Отменено";
    let TRY_AGAIN = "Попробуй еще раз.";

    let answer = prompt("Желаете пройти регистрацию на сайте?");

    if(answer == YES)
    {
        alert(COOL);
        requestLogin();
    }
    else if(answer == null)
    {
        alert(CANCELLED);
    }
    else
    {
        alert(TRY_AGAIN);
        askAboutRegistration();
    } 
}

function requestLogin()
{
    let LOGIN = "Логин";
    let ADMIN = "Админ";
    let CANCELLED = "Отменено";
    let UNKNOWN = "Я вас не знаю";

    let login = prompt(LOGIN);

    if(login == ADMIN)
    {
        requestPassword();
    }
    else if(login == null || login == "")
    {
        alert(CANCELLED);
    }
    else
    {
        alert(UNKNOWN);
        requestLogin();
    }
}

function requestPassword()
{
    let PASSWORD = "Пароль";
    let I_AM_IN_CHARGE_HERE = "Я главный";
    let WELCOME = "Здравствуйте";
    let CANCELLED = "Отменено";
    let WRONG_PASSWORD = "Неверный пароль";

    let password = prompt(PASSWORD);
    
    if(password == I_AM_IN_CHARGE_HERE)
    {
        alert(WELCOME);
    }
    else if(password == null)
    {
        alert(CANCELLED);
    }
    else
    {
        alert(WRONG_PASSWORD);
        requestPassword();
    }
}