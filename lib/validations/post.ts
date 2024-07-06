import { z } from "zod";

export const postPatchSchema = z.object({
    title: z.string().min(3, { message: "記事のタイトルは3文字以上で入力してください。" }).max(128),
    content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;