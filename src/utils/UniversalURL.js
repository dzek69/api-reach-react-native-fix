import parse from "parse-url";

const NOT_FOUND = -1;

const splitOne = (source, split) => {
    const where = source.indexOf(split);
    if (where === NOT_FOUND) {
        return [source];
    }
    return [
        source.substr(0, where),
        source.substr(where + 1),
    ];
};

const getHref = (r, username, password) => { // eslint-disable-line max-statements
    let result = r.protocol + "://";
    if (username) {
        result += encodeURIComponent(username);
    }
    if (password) {
        result += ":" + encodeURIComponent(password);
    }
    if (username) {
        result += "@";
    }
    result += r.resource;
    if (r.port) {
        result += ":" + r.port;
    }
    result += r.pathname || "/";
    if (r.search) {
        result += "?" + r.search;
    }
    if (r.hash) {
        result += "#" + r.hash;
    }
    return result;
};

class UniversalURL {
    constructor(url) {
        const r = parse(url);

        const [username, password] = splitOne(r.user, ":");

        const host = r.resource + (r.port ? ":" + r.port : "");

        return {
            href: getHref(r, username, password), // @todo add domain handle national chars and handle search chars
            origin: r.protocol + "://" + host,
            protocol: r.protocol + ":",
            username: (username && encodeURIComponent(username)) || "", // @todo add support for `@` in username
            password: (password && encodeURIComponent(password)) || "",
            host: host,
            hostname: r.resource,
            port: (r.port && String(r.port)) || "",
            pathname: r.pathname || "/",
            search: r.search && "?" + r.search,
            searchParams: r.query,
            hash: r.hash && "#" + r.hash,
        };
    }
}

export default UniversalURL;
