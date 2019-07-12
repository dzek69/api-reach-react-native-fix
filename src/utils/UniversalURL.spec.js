import UniversalURL from "./UniversalURL";

const compareKeys = "href,origin,protocol,username,password,host,hostname,port,pathname,search,hash".split(",");

const compare = (result1, result2) => {
    compareKeys.forEach(key => {
        must(result1[key]).equal(result2[key]);
    });
};

describe("UniversalURL", () => {
    it("works on full features url without catches", () => {
        const url = "http://a:b@onet.pl:123/some/thing?yes=true&no=false#my-hash";

        const custom = new UniversalURL(url);
        const original = new URL(url);
        compare(custom, original);
    });

    it("works on double colon", () => {
        const url = "http://aa:bb:bb@onet.pl:123/some/thing?yes=true&no=false#my-hash";

        const custom = new UniversalURL(url);
        const original = new URL(url);
        compare(custom, original);
    });

    it("works on stripped to basics url", () => {
        const url = "http://domain.com";

        const custom = new UniversalURL(url);
        const original = new URL(url);
        compare(custom, original);
    });
});
