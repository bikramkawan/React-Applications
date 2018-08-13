import axios from 'axios';

function callApi(endpoint, options) {
    console.log(endpoint, options);
    if (!endpoint) {
        throw new Error(`Endpoint is missing: ${endpoint}`);
    }

    return new Promise((resolve, reject) => {
        return axios
            .get(endpoint)
            .then((response, res) => {
                const result = res || {};

                resolve({
                    response: response.data,
                });
            })
            .catch(error =>
                reject({
                    error: error.message,
                }),
            );
    });
}

export const CALL_API = 'Call API';

const handleAPICall = store => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    let {} = action[CALL_API];

    let { endpoint, param, types } = action[CALL_API];

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Requires three action for async operation.');
    }

    if (typeof endpoint !== 'string') {
        throw new Error('End Point must of type String');
    }

    function actionWithPayload(data) {
        const finalAction = { ...action, ...data };
        delete finalAction[CALL_API];
        if (data.response) {
            return {
                type: finalAction.type,
                payload: finalAction.response,
            };
        }
        return {
            type: finalAction.type,
        };
    }

    const [requestType, successType, failureType] = types;

    next(actionWithPayload({ type: requestType }));

    return callApi(endpoint, param).then(
        response => {
            if (typeof successType === 'function') {
                return next(successType(response));
            }

            next(
                actionWithPayload(
                    Object.assign({}, response, {
                        type: successType,
                    }),
                ),
            );
        },
        response => {
            if (typeof failureType === 'function') {
                return next(failureType(response));
            }

            return next(
                actionWithPayload({
                    type: failureType,
                    response: response.error,
                }),
            );
        },
    );
};

export default handleAPICall;
