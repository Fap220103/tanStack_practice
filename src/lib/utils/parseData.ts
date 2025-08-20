// utils/parseData.ts
import { ZodType } from "zod";

export function validate<T>(schema: ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error("❌ Zod validation failed:", result.error.format());
    throw new Error("Invalid response");
  }
  return result.data;
}
