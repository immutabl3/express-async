module.exports = function expressAsyncWrap(fn) {
	return function expressAsync(req, res, next) {
		return Promise
			.resolve()
			.then(function() {
				return fn(req, res, next);
			})
			.catch(next);
	};
};