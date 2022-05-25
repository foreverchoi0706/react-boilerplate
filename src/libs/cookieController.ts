
class CookieController {
    get = (name: string): string | null => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    set = (name: string, value: string, ms: number): void => {
        let expires = "";
        const date = new Date();
        date.setTime(date.getTime() + ms);
        expires = "; expires=" + date.toUTCString();
        console.log(name + "=" + (value || "") + expires + "; path=/");
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    delete = (name: string): void => {
        this.set(name, "", 0);
    }

    isExist = (name: string): boolean => {
        return Boolean(this.get(name));
    }
}

export default new CookieController();