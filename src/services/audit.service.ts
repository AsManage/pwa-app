import { centralGW } from "./axios.service";

export const getListAvailableSession = async () => {
    return await centralGW.get("/asset/audit-session");
};

export const getSessionDetail = async (sessionId: number) => {
    return await centralGW.get(`/asset/audit-session/${sessionId}`);
};

export const updateAssetAuditDetail = async (
    sessionId: number,
    auditAssetId: number,
    payload: {
        note: string;
        status: string;
    }
) => {
    return await centralGW.put(
        `/asset/audit-session/${sessionId}/asset/${auditAssetId}`,
        payload
    );
};

export const startAuditSession = async (sessionId: number) => {
    return await centralGW.put(`/asset/audit-session/`, {
        sessionId: sessionId,
        status: "AUDITING",
    });
};

export const endAuditSession = async (sessionId: number) => {
    return await centralGW.put(`/asset/audit-session/`, {
        sessionId: sessionId,
        status: "FINISHED",
    });
};

