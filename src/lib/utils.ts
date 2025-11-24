export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassDictionary
  | ClassValue[];

type ClassDictionary = Record<string, boolean>;

function toVal(mix: ClassValue): string {
  if (typeof mix === "string" || typeof mix === "number") {
    return String(mix);
  }

  if (Array.isArray(mix)) {
    return mix.map(toVal).filter(Boolean).join(" ");
  }

  if (mix && typeof mix === "object") {
    return Object.keys(mix)
      .filter((key) => (mix as ClassDictionary)[key])
      .join(" ");
  }

  return "";
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toVal).filter(Boolean).join(" ");
}
