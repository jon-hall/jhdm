export default {
    static_dir: process.env.NODE_ENV === 'production'
        ? '../client'
        : '../../dist/client'
};
