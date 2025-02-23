export const checkForUUID = (id: string) : boolean => {
    if ((/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i).test(id)) {
        return true;
    }
    return false;
}