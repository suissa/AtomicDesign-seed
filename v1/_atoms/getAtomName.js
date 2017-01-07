module.exports = (_file) => _file
                            .split('atom-')[1]
                            .split('.js')[0]
                            .toLowerCase()