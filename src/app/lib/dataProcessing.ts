import { DataEntry, ProcessedEntry } from "./types";
import {
  longConversion,
  bcdConversion,
  getSignalQuality,
  real4Conversion,
} from "./conversions";

const registerPairs = [
  { start: 1, end: 2, format: "REAL4" },
  { start: 3, end: 4, format: "REAL4" },
  { start: 5, end: 6, format: "REAL4" },
  { start: 7, end: 8, format: "REAL4" },
  { start: 9, end: 10, format: "REAL4" },
  { start: 11, end: 12, format: "LONG" },
  { start: 13, end: 14, format: "LONG" },
  { start: 15, end: 16, format: "REAL4" },
  { start: 17, end: 18, format: "LONG" },
  { start: 19, end: 20, format: "REAL4" },
  { start: 21, end: 22, format: "LONG" },
  { start: 23, end: 24, format: "REAL4" },
  { start: 25, end: 26, format: "LONG" },
  { start: 27, end: 28, format: "REAL4" },
  { start: 29, end: 30, format: "LONG" },
  { start: 31, end: 32, format: "REAL4" },
  { start: 33, end: 34, format: "REAL4" },
  { start: 35, end: 36, format: "REAL4" },
  { start: 37, end: 38, format: "REAL4" },
  { start: 39, end: 40, format: "REAL4" },
  { start: 41, end: 42, format: "REAL4" },
  { start: 43, end: 44, format: "REAL4" },
  { start: 45, end: 46, format: "REAL4" },
  { start: 47, end: 48, format: "REAL4" },
  { start: 49, end: 50, format: "BCD" },
  { start: 77, end: 78, format: "REAL4" },
  { start: 79, end: 80, format: "REAL4" },
  { start: 81, end: 82, format: "REAL4" },
  { start: 83, end: 84, format: "REAL4" },
  { start: 85, end: 86, format: "REAL4" },
  { start: 87, end: 88, format: "REAL4" },
  { start: 89, end: 90, format: "REAL4" },
  { start: 97, end: 98, format: "REAL4" },
  { start: 99, end: 100, format: "REAL4" },
];

export function groupAndProcessRegisters(
  dataEntries: DataEntry[]
): { register: string; value: string | number }[] {
  const processedEntries: ProcessedEntry[] = [];
  const processedRegisters = new Set<number>();

  dataEntries.forEach((entry) => {
    if (processedRegisters.has(entry.register)) {
      return;
    }

    const pair = registerPairs.find((pair) => pair.start === entry.register);
    if (pair) {
      const startEntry = entry;
      const endEntry = dataEntries.find((e) => e.register === pair.end);
      let combinedValue: string | number = "N/A";

      if (endEntry) {
        if (pair.format === "REAL4") {
          combinedValue = real4Conversion(startEntry.value + endEntry.value);
        } else if (pair.format === "LONG") {
          const reg1Value = parseInt(startEntry.value, 10);
          const reg2Value = parseInt(endEntry.value, 10);
          combinedValue = longConversion(reg1Value, reg2Value);
        }
        processedRegisters.add(pair.end);
      }
      processedEntries.push({
        register: `${startEntry.register} - ${endEntry?.register || "N/A"}`,
        value: combinedValue,
      });
      processedRegisters.add(pair.start);
    } else {
      // Process as a single register
      let value: string | number;
      switch (entry.register) {
        case 92:
          value = getSignalQuality(parseInt(entry.value, 10));
          break;
        
        default:
          value = entry.value; 
          break;
      }
      processedEntries.push({
        register: entry.register.toString(),
        value: value,
      });
      processedRegisters.add(entry.register);
    }
  });

  return processedEntries;
}
