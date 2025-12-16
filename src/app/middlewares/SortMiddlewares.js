module.exports = function SortMiddlewares(req, res, next) {
    res.locals = res.locals || {};

    res.locals._sort = {
        enabled: false,
        type: 'default',
        column: null,
    };

    if ('_sort' in req.query) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);

        Object.assign(res.locals._sort, {
            enabled: true,
            type: isValidType ? req.query.type : 'asc',
            column: req.query.column,
        });
    }

    next();
};
