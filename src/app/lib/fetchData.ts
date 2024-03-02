import { DataEntry } from "./types";

export async function fetchData(): Promise<DataEntry[]> {
  try {
    const response = await fetch("https://tuftuf.gambitlabs.fi/feed.txt");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const textData = await response.text();
    const data = textData
      .split("\n")
      .filter((line: string) => line.includes(":"));
    const dataEntries: DataEntry[] = data.map((line: string) => {
      const [register, value] = line.split(":").map((part) => part.trim());
      return { register: parseInt(register, 10), value };
    });
    return dataEntries;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
