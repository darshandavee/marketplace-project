// functions/users.js
exports.handler = async (event) => {
    // Hardcoded user data for testing
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
};
