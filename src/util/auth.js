import {TOKEN_TIME, TOKEN_TIME_VALUE} from "@/util/constant";

// 在localStorage中存储
export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, Date.now());
}

// 从localStorage获取有效时间
export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME);
}

// 比较token time是否在有效时间内
export const diffTokenTime = () => {
    return Date.now() - getTokenTime() > TOKEN_TIME_VALUE
}
