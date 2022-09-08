import instance from "@/apis/instance";

export const getAccountInfo = () => instance.get("");

export const signIn = () => instance.post("");

export const signOut = () => instance.post("");

export const withdraw = () => instance.post("");
