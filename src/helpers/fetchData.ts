import axios, { isAxiosError, isCancel } from "axios";

export async function fetchData<T>(url: string, signal: AbortSignal): Promise<T | null> {
  try {
    const { data } = await axios<T>(url, { signal });
    return data;
  } catch (error: unknown) {
    if (isCancel(error)) {
      console.warn("Request was canceled.");
      return null;
    }

    if (isAxiosError(error)) {
      throw new Error(error.message);
    }

    throw new Error("Something went wrong. Please, try again later.");
  }
}
