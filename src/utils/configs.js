const PROJECT_ID = '3b3l8m04511z';

export const getHeaderWithProjectId = () => {
    return {
        headers: { projectId: PROJECT_ID },
    };
};

export const getHeaderWithProjectIDAndBody = () => {
    return {
        headers: { 
            projectId: PROJECT_ID, 
            "Content-Type": "application/json" 
        },
    };
};

export const getAuthHeaderConfig = () => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: PROJECT_ID,
            },
        };
    } 
    else {
        return {
            error: "user not logged in",
        };
    }
};
