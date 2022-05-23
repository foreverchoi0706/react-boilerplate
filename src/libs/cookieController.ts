export const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export const setCookie = (name: string, value: string, ms: number): void => {
    let expires = "";
    if (ms) {
        const date = new Date();
        date.setTime(date.getTime() + ms);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const delCookie = (name: string): void => {
    alert(name);
    document.cookie = "name=isLogined; max-age=0";
}

export const isExistCookie = (name: string): boolean => {
    return Boolean(getCookie(name));
}
