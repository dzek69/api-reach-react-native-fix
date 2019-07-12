import AbortCtrl from "abort-controller/dist/abort-controller";

if (!global.AbortController) {
    global.AbortController = AbortCtrl;
}
if (!window.AbortController) {
    window.AbortController = AbortCtrl;
}
