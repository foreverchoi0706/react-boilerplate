class CookieController {
    constructor() {
        console.log("CookieController init...");
    }

    get = (key: string): string | null => {
        const nameEQ = key + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    set = (name: string, value: string, ms: number): void => {
        const date = new Date();
        date.setTime(date.getTime() + ms);
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    delete = (name: string): void => {
        this.set(name, "", 0);
    };

    has = (key: string): boolean => {
        return Boolean(this.get(key));
    };
}

export default new CookieController();
