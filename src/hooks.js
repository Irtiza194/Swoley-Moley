export const handle = async ({ event, resolve }) => {
    if (event.request.headers.get("Authorization") !== `Basic ${btoa("hello:hello")}`) {
        return new Response("401 Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": 'Basic realm="User Visible Realm", charset="UTF-8"' },
        });
    }
    else return resolve(event);
};
