var loggingConfig = {
    defaultLogLevel: 'error',
    'modules/RTC/TraceablePeerConnection.js': 'error',
    'modules/statistics/CallStats.js': 'error',
    'modules/xmpp/strophe.util.js': 'error'
};
typeof module === 'object'
    && typeof exports === 'object'
    && (module.exports = loggingConfig);
