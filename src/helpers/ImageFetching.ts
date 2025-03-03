export interface GoogleFile {
  "id": string,
  "kind": string,
  "mimeType": string,
  "name": string;
};

export async function getListOfImages(): Promise<GoogleFile[]> {
  const response = await fetch("http://localhost:8080/files/get", { method: "GET" });

  return response.json()
}


export async function getActualImage(id: string): Promise<Blob> {
  const response = await fetch(`http://localhost:8080/files/get/${id}`, { method: "GET" });

  return response.blob();
}