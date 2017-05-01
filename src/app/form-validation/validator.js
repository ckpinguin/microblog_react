export const ruleRunner = (field, name, ...validation) => {
    return (state) => {
        for (let v of validation) {
            let errorMessageFunc = v(state[field], state);
            if (errorMessageFunc) {
                return {[field]: errorMessageFunc(name)};
            }
        }
        return null;
    };
};

export const run = (state, runners) => {
    console.log('Running validations on state: ', state);
    return runners.reduce((memo, runner) => {
        console.log(memo);
        return Object.assign(memo, runner(state));
    }, {});
};