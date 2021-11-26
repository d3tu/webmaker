var WEB = function () {
    if (typeof arguments[0] === "object") {
        return Object.keys(arguments[0])
            .map(
                (keyWEB) =>
                    keyWEB
                        .match(/\w[a-z]*/g)
                        .join("-")
                        .toLowerCase() +
                    ":" +
                    arguments[0][keyWEB] +
                    ";"
            )
            .join("");
    } else {
        var eWEB = document.createElement(arguments[0]);
        if (Array.isArray(arguments[1])) {
            if (arguments[2]) {
                Object.keys(arguments[2]).forEach((keyWEB) => (eWEB[keyWEB] = arguments[2][keyWEB]));
            }
            arguments[1].forEach((valueWEB) => eWEB.appendChild(valueWEB));
        } else if (arguments[1] !== undefined) {
            Object.keys(arguments[1]).forEach((keyWEB) => (eWEB[keyWEB] = arguments[1][keyWEB]));
        }
        return eWEB;
    }
};
