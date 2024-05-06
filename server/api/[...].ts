import { useBase, createRouter, defineEventHandler } from "h3";
import * as blogControl from "~~/server/controllers/blog";

const router = createRouter();

router.get("/blog", defineEventHandler(blogControl.read));
router.post("/blog", defineEventHandler(blogControl.create));
router.get("/blog/:id", defineEventHandler(blogControl.detail));
router.put("/blog/:id", defineEventHandler(blogControl.update));
router.delete("/blog/:id", defineEventHandler(blogControl.remove));

export default useBase("/api", router.handler);
