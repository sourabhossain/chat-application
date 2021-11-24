const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
	const upload = uploader(
		"avatars",
		["image/jpeg", "image/jpg", "image/png"],
		1_000_000,
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

module.exports = avatarUpload;
