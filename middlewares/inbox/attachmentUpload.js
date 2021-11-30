const uploader = require("../../utilities/multipleUploader.js");

function attachmentUpload(req, res, next) {
	const upload = uploader(
		"attachments",
		["image/jpeg", "image/jpg", "image/png"],
		1_000_000,
		2,
		"Only .jpg, jpeg or .png format allowed!"
	);

	// call the middleware function
	upload.any()(req, res, (error) => {
		if (error) {
			res.status(500).json({
				errors: {
					avatar: {
						msg: error.message,
					},
				},
			});
		} else {
			next();
		}
	});
}

module.exports = attachmentUpload;
