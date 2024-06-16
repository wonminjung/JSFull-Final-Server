import moment from "moment";

const getCurrentTime = () => {
    const now = moment().format("YYYY-MM-dd HH:mm:ss");
    return now;
};

export { getCurrentTime };