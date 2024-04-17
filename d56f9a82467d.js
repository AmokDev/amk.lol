setTimeout(function () {
    const error = new Error("protection from opening DevTools");
    Error.prepareStackTrace = function (err) {
        if (error === err && !window.location.search.includes("_ij_reload=RELOAD_ON_SAVE")) {
            document.write("");
            window.location.replace("https://youtu.be/dQw4w9WgXcQ");
        }
        return err.stack;
    }
    throw error;
}, 0);