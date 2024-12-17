import { ROLES } from "../constants/var";

export const getLandingPage = (role) => {
    if (role === ROLES.ADMIN) return '/products';
    return '/products';
};

export const IsEmptyObject = (obj) =>
    !(
        typeof obj === 'object' &&
        !(obj instanceof Array) &&
        obj !== null &&
        Object.keys(obj).length > 0
    );
