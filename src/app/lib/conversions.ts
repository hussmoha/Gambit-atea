// Muuntaa merkkijonon REAL4-formaattiin
export function real4Conversion(str: string): number {
  const numToUint8 = (str: string) =>
    Uint8Array.from(str.match(/.{1,2}/g)!.map((comp) => parseInt(comp, 16)));
  const [A, B, C, D] = numToUint8(str);
  const reordered = new Uint8Array([C, D, A, B]);
  return new DataView(reordered.buffer).getFloat32(0);
}

// Muuntaa kaksi rekisterinumeroa LONG-tyypin luvuksi
export function longConversion(reg1: number, reg2: number): number {
  const hex1 = reg1.toString(16).padStart(4, "0");
  const hex2 = reg2.toString(16).padStart(4, "0");

  const concatenatedHex = hex2 + hex1;

  let combinedValue = parseInt(concatenatedHex, 16);
  if (combinedValue >= 2 ** 31) {
    combinedValue -= 2 ** 32;
  }

  return combinedValue;
}

// Muuntaa BCD-formaatissa olevan numeron desimaaliluvuksi
export function bcdConversion(bcd: number): number {
  return (
    ((bcd & 0xf000) >> 12) * 1000 +
    ((bcd & 0x0f00) >> 8) * 100 +
    ((bcd & 0x00f0) >> 4) * 10 +
    (bcd & 0x000f)
  );
}

// Arvioi signaalin laadun alhaisen tavun perusteella
export function getSignalQuality(register: number): number {
  return register & 0xff;
}

// Muuntaa BCD-formaatissa olevat rekisteriarvot päivämääräksi ja ajaksi
export function numToDateConversion(regValues: number[]): string {
  const dateParts = regValues.map(bcdConversion);
  const year = `20${dateParts[2] / 100}`;
  const month = `${dateParts[2] % 100}`;
  const day = `${dateParts[1] / 100}`;
  const hour = `${dateParts[1] % 100}`;
  const minute = `${dateParts[0] / 100}`;
  const second = `${dateParts[0] % 100}`;

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
