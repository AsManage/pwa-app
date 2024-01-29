import { centralGW } from "./axios.service";

export const getListAvailableSession = async () => {
    return await centralGW.get("/asset/audit-session");
};

export const getSessionDetail = async (sessionId: number) => {
    return await centralGW.get(`/asset/audit-session/${sessionId}`);
};