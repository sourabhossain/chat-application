const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
	next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
	if (process.env.NODE_ENV === "production") {
		res.locals.error = { message: err.message };
	} else {
		res.locals.error = err;
	}

	res.status(err.status || 500);

	if (res.locals.html) {
		// html response
		res.render("error", {
			title: "Error page",
		});
	} else {
		// json response
		res.json(res.locals.error);
	}
}

module.exports = {
	notFoundHandler,
	errorHandler,
};
